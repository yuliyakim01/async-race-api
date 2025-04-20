import { getCar } from './garage';
import { WinnerWithCar } from '../types';

const base = 'http://localhost:3000/winners';

export async function getWinners(
  page = 1,
  limit = 10,
  sort = 'time',
  order = 'ASC'
): Promise<WinnerWithCar[]> {
  const res = await fetch(
    `${base}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  return res.json();
}

export async function getWinner(id: number) {
  const res = await fetch(`${base}/${id}`);
  return res.ok ? res.json() : null;
}

export async function createWinner(id: number, time: number) {
  await fetch(base, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, wins: 1, time }),
  });
}

export async function updateWinner(id: number, wins: number, time: number) {
  await fetch(`${base}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ wins, time }),
  });
}

export async function deleteWinner(id: number) {
  await fetch(`http://localhost:3000/winners/${id}`, {
    method: 'DELETE',
  });
}


// This version returns both the enriched list and total count
export async function getWinnersWithCars(page = 1, limit = 10, sort = 'time', order = 'ASC') {
  const res = await fetch(`${base}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  const total = Number(res.headers.get('X-Total-Count') || '0');
  const winners = await res.json();

  const detailedWinners = await Promise.all(
    winners.map(async (winner: { id: number; wins: number; time: number }) => {
      const car = await getCar(winner.id);
      return {
        id: winner.id,
        wins: winner.wins,
        time: winner.time,
        name: car.name,
        color: car.color,
      };
    })
  );

  return { winners: detailedWinners, total };
}

