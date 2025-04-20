import { garageState } from '../state';

export function createPagination(
  currentPage: number,
  onPageChange: (page: number) => void,
  totalPages: number
): HTMLElement {
  const container = document.createElement('div');
  container.className = 'pagination';

  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Prev';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    const newPage = currentPage - 1;
    garageState.currentPage = newPage;
    onPageChange(newPage);
  };

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    const newPage = currentPage + 1;
    garageState.currentPage = newPage;
    onPageChange(newPage);
  };

  container.appendChild(prevBtn);
  container.append(` Page ${currentPage} of ${totalPages} `);
  container.appendChild(nextBtn);

  return container;
}
