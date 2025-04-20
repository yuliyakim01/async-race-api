import { getCars, deleteCar, updateCar } from '../api/garage';
import { startEngine, stopEngine, drive } from '../api/engine';
import { Car } from '../types';
import { deleteWinner } from '../api/winners';

export async function createCarList(page = 1): Promise<HTMLElement> {
  const container = document.createElement('div');
  container.className = 'car-list';

  const cars: Car[] = await getCars(page);

  for (const car of cars) {
    const carDiv = document.createElement('div');
    carDiv.className = 'car-item';

    const carBox = document.createElement('div');
    carBox.className = 'car-box';
    carBox.style.backgroundColor = car.color;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${car.name} (ID: ${car.id})`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start';

    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'Stop';
    stopBtn.disabled = true; // start is enabled initially

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'car-buttons';
    buttonGroup.append(editBtn, deleteBtn);

    const engineGroup = document.createElement('div');
    engineGroup.className = 'engine-buttons';
    engineGroup.append(startBtn, stopBtn);

    const carWrapper = document.createElement('div');
    carWrapper.className = 'car-wrapper';
    carWrapper.append(carBox, nameSpan, buttonGroup, engineGroup);

    const carTrack = document.createElement('div');
    carTrack.className = 'car-track';
    carTrack.setAttribute('data-id', car.id.toString());
    carTrack.setAttribute('data-name', car.name);

    const carImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    carImg.setAttribute('viewBox', '0 0 200 100');
    carImg.setAttribute('class', 'car-image');
    carImg.setAttribute('width', '120');
    carImg.setAttribute('height', '60');
    carImg.style.position = 'absolute';
    carImg.style.left = '0';
    carImg.style.top = '0';
    carImg.style.transition = 'left 0s linear';

    const carBody = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    carBody.setAttribute('x', '20');
    carBody.setAttribute('y', '20');
    carBody.setAttribute('width', '160');
    carBody.setAttribute('height', '40');
    carBody.setAttribute('rx', '12');
    carBody.setAttribute('fill', car.color);

    const frontWheel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    frontWheel.setAttribute('cx', '50');
    frontWheel.setAttribute('cy', '70');
    frontWheel.setAttribute('r', '10');
    frontWheel.setAttribute('fill', '#333');

    const rearWheel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    rearWheel.setAttribute('cx', '150');
    rearWheel.setAttribute('cy', '70');
    rearWheel.setAttribute('r', '10');
    rearWheel.setAttribute('fill', '#333');

    carImg.appendChild(carBody);
    carImg.appendChild(frontWheel);
    carImg.appendChild(rearWheel);
    carTrack.appendChild(carImg);

    // START ENGINE
    startBtn.onclick = async () => {
      startBtn.disabled = true;
      stopBtn.disabled = false;

      try {
        const { velocity, distance } = await startEngine(car.id);
        const time = distance / velocity;

        carImg.style.transition = `left ${time}ms linear`;
        carImg.style.left = 'calc(100% - 120px)';

        await drive(car.id);
      } catch (e) {
        console.warn(`Car ${car.name} failed to drive:`, e);

        // If drive fails, reset button states
        stopBtn.disabled = true;
        startBtn.disabled = false;
      }
    };

    // STOP ENGINE
    stopBtn.onclick = async () => {
      stopBtn.disabled = true;
      startBtn.disabled = false;

      await stopEngine(car.id);
      carImg.style.transition = 'left 0.3s ease-out';
      carImg.style.left = '0px';
    };

    // EDIT
    editBtn.onclick = () => {
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.value = car.name;

      const colorInput = document.createElement('input');
      colorInput.type = 'color';
      colorInput.value = car.color;

      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';

      carWrapper.innerHTML = '';
      carWrapper.append(nameInput, colorInput, saveBtn, cancelBtn);

      saveBtn.onclick = async () => {
        await updateCar(car.id, nameInput.value, colorInput.value);
        const refreshed = await createCarList(page);
        container.replaceWith(refreshed);
      };

      cancelBtn.onclick = async () => {
        const refreshed = await createCarList(page);
        container.replaceWith(refreshed);
      };
    };

    // DELETE
    deleteBtn.onclick = async () => {
      if (confirm(`Delete car "${car.name}"?`)) {
        await deleteCar(car.id);
        await deleteWinner(car.id);
        const refreshed = await createCarList(page);
        container.replaceWith(refreshed);
      }
    };

    carDiv.appendChild(carWrapper);
    carDiv.appendChild(carTrack);
    container.appendChild(carDiv);
  }

  return container;
}
