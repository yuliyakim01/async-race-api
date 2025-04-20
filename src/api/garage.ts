import { Car } from '../types';

const base = 'http://localhost:3000/garage';

export async function getCar(id: number) {
  const response = await fetch(`${base}/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch car with id ${id}`);
  return response.json();
}

export async function getCars(page = 1, limit = 7): Promise<Car[]> {
  const response = await fetch(`http://localhost:3000/garage?_page=${page}&_limit=${limit}`);
  return response.json();
}

export async function getTotalCars(): Promise<number> {
  const res = await fetch(`${base}`);
  const allCars = await res.json();
  return allCars.length;
}


export async function createCar(name: string, color: string): Promise<void> {
  await fetch('http://localhost:3000/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, color }),
  });
}

export async function deleteCar(id: number): Promise<void> {
  await fetch(`http://localhost:3000/garage/${id}`, {
    method: 'DELETE',
  });
}

export async function updateCar(id: number, name: string, color: string): Promise<void> {
  await fetch(`http://localhost:3000/garage/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, color }),
  });
}

