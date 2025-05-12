const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "";
const APP_ID = process.env.NEXT_PUBLIC_API_APPLICATION_ID || "";

const headers = {
  token: API_TOKEN,
  "X-Application-ID": APP_ID,
};

export async function fetchLocationData(locationCode: string) {
  const response = await fetch(
    `https://api.wttr.io/web-app/v1/locations/${locationCode}/`,
    { headers }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location data with code: " + locationCode);
  }

  return response.json();
}

export async function fetchForecastData(latitude: number, longitude: number) {
  const response = await fetch(
    `https://api.wttr.io/web-app/v1/weather/forecast/${latitude}/${longitude}/`,
    {
      headers,
      next: { revalidate: 600 },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch forecast data with latitude: " +
        latitude +
        " and longitude: " +
        longitude
    );
  }

  return response.json();
}
