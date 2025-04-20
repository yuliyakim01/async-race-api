import { getWinnersWithCars } from '../api/winners';
import { createPagination } from '../components/Pagination';
import { WinnerWithCar } from '../types';

let sortBy: 'wins' | 'time' = 'wins';
let sortOrder: 'ASC' | 'DESC' = 'DESC';
let currentPage = 1;

export function createWinnersView(): HTMLElement {
  const section = document.createElement('section');

  const heading = document.createElement('h2');
  heading.className = 'winners-title';
  section.appendChild(heading);

  const table = document.createElement('table');
  table.className = 'winners-table';

  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th>#</th>
    <th>Car</th>
    <th>Name</th>
    <th id="sort-wins" style="cursor: pointer;">Wins ⬇</th>
    <th id="sort-time" style="cursor: pointer;">Best Time (s)</th>
  `;
  table.appendChild(headerRow);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  const paginationContainer = document.createElement('div');

  async function renderPage(page: number) {
    currentPage = page;
    tbody.innerHTML = '';
    paginationContainer.innerHTML = '';

    const { winners, total }: { winners: WinnerWithCar[]; total: number } = await getWinnersWithCars(
      page,
      7,
      sortBy,
      sortOrder
    );

    heading.textContent = `🏁 Winners (${total})`;

    winners.forEach((winner, index) => {
      const row = document.createElement('tr');

      const carSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      carSVG.setAttribute('viewBox', '0 0 200 100');
      carSVG.setAttribute('width', '60');
      carSVG.setAttribute('height', '30');

      const body = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      body.setAttribute('x', '20');
      body.setAttribute('y', '20');
      body.setAttribute('width', '160');
      body.setAttribute('height', '40');
      body.setAttribute('rx', '12');
      body.setAttribute('fill', winner.color);

      const wheel1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      wheel1.setAttribute('cx', '50');
      wheel1.setAttribute('cy', '70');
      wheel1.setAttribute('r', '10');
      wheel1.setAttribute('fill', '#333');

      const wheel2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      wheel2.setAttribute('cx', '150');
      wheel2.setAttribute('cy', '70');
      wheel2.setAttribute('r', '10');
      wheel2.setAttribute('fill', '#333');

      carSVG.append(body, wheel1, wheel2);

      row.innerHTML = `
        <td>${(page - 1) * 7 + index + 1}</td>
        <td></td>
        <td>${winner.name}</td>
        <td>${winner.wins}</td>
        <td>${(winner.time / 1000).toFixed(2)}</td>
      `;
      row.children[1].appendChild(carSVG);
      tbody.appendChild(row);
    });

    paginationContainer.appendChild(
      createPagination(page, renderPage, Math.ceil(total / 7))
    );
  }

  section.appendChild(table);
  section.appendChild(paginationContainer);

  table.querySelector('#sort-wins')?.addEventListener('click', () => {
    sortBy = 'wins';
    sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    renderPage(1);
  });

  table.querySelector('#sort-time')?.addEventListener('click', () => {
    sortBy = 'time';
    sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    renderPage(1);
  });

  renderPage(currentPage);

  return section;
}
