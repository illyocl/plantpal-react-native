//const BASE_URL = "http://192.168.70.29:5000"; 
const BASE_URL = 'http://10.0.2.2:5000'; 


export async function registerUser(name: string, email: string, password: string) {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function addPlant(userId: string, plantData: any) {
  const response = await fetch(`${BASE_URL}/api/plants?userId=${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantData),
  });
  return response.json();
}

export async function getPlants(userId: string) {
  const response = await fetch(`${BASE_URL}/api/plants?userId=${userId}`);
  return response.json();
}

export async function getCalendarEvents(userId: string) {
  const response = await fetch(`${BASE_URL}/api/calendar?userId=${userId}`);
  return response.json();
}

export async function deletePlant(plantId: string) {
    const response = await fetch(`${BASE_URL}/api/plants/${plantId}`, {
      method: "DELETE",
    });
    return response.json();
  }
  