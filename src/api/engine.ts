const BASE_URL = 'http://localhost:3000';

export async function startEngine(id: number) {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
    method: 'PATCH',
  });
  return response.json(); 
}

export async function stopEngine(id: number) {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  return response.json(); 
}

export async function drive(id: number) {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  if (response.status !== 200) throw new Error('Car broke down');
  return response.json(); 
}
