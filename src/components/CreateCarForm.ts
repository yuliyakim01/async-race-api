import { createCar } from '../api/garage';

export function createCarForm(onCarCreated: () => void): HTMLElement {
  const form = document.createElement('form');
  form.className = 'create-car-form';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Car name';
  nameInput.required = true;

  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  colorInput.value = '#000000';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Create Car';

  form.append(nameInput, colorInput, submitBtn);

  form.onsubmit = async (e) => {
    e.preventDefault();
    await createCar(nameInput.value, colorInput.value);
    nameInput.value = '';
    colorInput.value = '#000000';
    onCarCreated();
  };

  return form;
}
