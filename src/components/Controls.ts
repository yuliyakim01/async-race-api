
export function createControls(
  onCreate: (name: string, color: string) => void,
  onRace: () => void,
  onReset: () => void
): HTMLElement {
  const controls = document.createElement('div');
  controls.className = 'controls';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Car name';

  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  colorInput.value = '#000000';

  const createBtn = document.createElement('button');
  createBtn.textContent = 'Create Car';
  createBtn.onclick = () => {
    const name = nameInput.value.trim();
    const color = colorInput.value;
    if (name) {
      onCreate(name, color);
      nameInput.value = '';
    }
  };

  const raceBtn = document.createElement('button');
  raceBtn.textContent = 'Race';
  raceBtn.onclick = onRace;

  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.onclick = onReset;

  controls.append(nameInput, colorInput, createBtn, raceBtn, resetBtn);

  return controls;
}

