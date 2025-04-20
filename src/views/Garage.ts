import { createCarList } from '../components/Cars';
import { createPagination } from '../components/Pagination';
import { createCarForm } from '../components/CreateCarForm';
import { startEngine, stopEngine, drive } from '../api/engine';
import { getCars, getTotalCars } from '../api/garage';
import { getWinner, createWinner, updateWinner } from '../api/winners';
import { Car } from '../types';
import { garageState } from '../state';
import { generateRandomCars } from '../utils/carGenerator';

export function createGarageView(): HTMLElement {
  const section = document.createElement('section');

  const heading = document.createElement('h2');
  heading.className = 'garage-title';
  section.appendChild(heading);

  const formContainer = document.createElement('div');
  const carContainer = document.createElement('div');
  const paginationContainer = document.createElement('div');
  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'race-controls';

  let currentPage = garageState.currentPage;

  const generateBtn = document.createElement('button');
  generateBtn.textContent = 'Generate Cars (100)';

  const winnerBanner = document.createElement('div');
  winnerBanner.className = 'winner-banner';

  const raceBtn = document.createElement('button');
  raceBtn.textContent = 'Race';

  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.disabled = true;

  raceBtn.onclick = async () => {
    raceBtn.disabled = true;
    resetBtn.disabled = false;
    winnerBanner.textContent = '⏱️ Racing...';

    const cars: Car[] = await getCars(currentPage, 7);
    const results: { id: number; name: string; time: number }[] = [];

    await Promise.all(
      cars.map(async (car) => {
        const track = document.querySelector(`.car-track[data-id="${car.id}"]`);
        const carSvg = track?.querySelector('svg') as SVGSVGElement;
        if (!carSvg) return;

        try {
          const { velocity, distance } = await startEngine(car.id);
          const expectedTime = distance / velocity;

          carSvg.style.transition = `left ${expectedTime}ms linear`;
          carSvg.style.left = 'calc(100% - 120px)';

          const startTime = performance.now();

          await Promise.all([
            drive(car.id),
            new Promise<void>((resolve) =>
              carSvg.addEventListener('transitionend', () => resolve(), { once: true })
            ),
          ]);

          const endTime = performance.now();

          results.push({
            id: car.id,
            name: car.name,
            time: endTime - startTime,
          });
        } catch {
          console.warn(`❌ ${car.name} failed`);
          const computedLeft = window.getComputedStyle(carSvg).left;
          carSvg.style.transition = 'none';
          carSvg.style.left = computedLeft;
          await stopEngine(car.id);
        }
      })
    );

    if (results.length === 0) {
      winnerBanner.textContent = '💥 No winner! All cars broke.';
    } else {
      const winner = results.reduce((best, curr) =>
        curr.time < best.time ? curr : best
      );
      winnerBanner.textContent = `🏆 ${winner.name} wins in ${(winner.time / 1000).toFixed(2)}s!`;

      const existing = await getWinner(winner.id);
      const bestTime = existing ? Math.min(winner.time, existing.time) : winner.time;

      if (existing) {
        await updateWinner(winner.id, existing.wins + 1, bestTime);
      } else {
        await createWinner(winner.id, winner.time);
      }
    }
  };

  resetBtn.onclick = async () => {
    const tracks = Array.from(document.querySelectorAll('.car-track'));
    await Promise.all(
      tracks.map(async (track) => {
        const id = +(track as HTMLElement).dataset.id!;
        const carSvg = track?.querySelector('svg');
        if (!(carSvg instanceof SVGSVGElement)) return;
        await stopEngine(id);
        carSvg.style.transition = 'left 0.3s ease-out';
        carSvg.style.left = '0px';
      })
    );
    raceBtn.disabled = false;
    resetBtn.disabled = true;
    winnerBanner.textContent = '';
  };

  controlsContainer.append(raceBtn, resetBtn, winnerBanner);

  const renderPage = async (page: number) => {
    garageState.currentPage = page;
    currentPage = page;
    carContainer.innerHTML = '';
    paginationContainer.innerHTML = '';

    const carList = await createCarList(page);
    carContainer.appendChild(carList);

    const totalCars = await getTotalCars();
    const totalPages = Math.ceil(totalCars / 7);
    heading.textContent = `Garage (${totalCars} cars)`;

    paginationContainer.appendChild(createPagination(page, renderPage, totalPages));
  };

  generateBtn.onclick = async () => {
    await generateRandomCars();
    const total = await getTotalCars();
    const totalPages = Math.ceil(total / 7);
    currentPage = totalPages;
    await renderPage(currentPage);
  };

  const form = createCarForm(() => renderPage(currentPage));
  formContainer.appendChild(form);
  formContainer.appendChild(generateBtn);

  renderPage(currentPage);

  section.appendChild(formContainer);
  section.appendChild(controlsContainer);
  section.appendChild(paginationContainer);
  section.appendChild(carContainer);

  return section;
}
