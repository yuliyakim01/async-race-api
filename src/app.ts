import { createGarageView } from './views/Garage';
import { createWinnersView } from './views/Winners';

export function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  const nav = document.createElement('nav');
  nav.innerHTML = `
    <button id="garage-btn">Garage</button>
    <button id="winners-btn">Winners</button>
  `;

  const content = document.createElement('main');
  content.id = 'main-content';

  app.innerHTML = '';
  app.append(nav, content);

  const loadView = (view: 'garage' | 'winners') => {
    content.innerHTML = '';
    content.append(view === 'garage' ? createGarageView() : createWinnersView());
  };

  nav.querySelector('#garage-btn')?.addEventListener('click', () => loadView('garage'));
  nav.querySelector('#winners-btn')?.addEventListener('click', () => loadView('winners'));

  loadView('garage'); // Default view
}
