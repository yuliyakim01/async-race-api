import { createCar } from '../api/garage';

function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function getRandomName(): string {
  const brands = ['Tesla', 'BMW', 'Ford', 'Audi', 'Honda', 'Chevy', 'Mazda', 'Kia', 'Lexus', 'Nissan'];
  const models = ['Model S', 'X5', 'Mustang', 'A4', 'Civic', 'Camaro', 'CX-5', 'Sportage', 'RX', 'Altima'];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${brand} ${model}`;
}

export async function generateRandomCars(): Promise<void> {
  const promises: Promise<unknown>[] = [];

  for (let i = 0; i < 100; i++) {
    const name = getRandomName();
    const color = getRandomColor();
    promises.push(createCar(name, color));
  }

  await Promise.all(promises);
}
