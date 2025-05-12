import type { ForecastSummary, ForecastSpace } from "@/app/types/forecast";
import { fetchLocationData, fetchForecastData } from "@/lib/api";

export async function getForecastByLocationCode(
  locationCode: string,
  days: number
): Promise<{
  items: Array<{
    summary: ForecastSummary;
    spaces: Array<ForecastSpace>;
  }>;
  timezone: string;
}> {
  const locationData = await fetchLocationData(locationCode);
  const { latitude, longitude } = locationData.coordinates;
  const forecastData = await fetchForecastData(latitude, longitude);

  return {
    items: forecastData.items.slice(0, days),
    timezone: forecastData.location.timezone,
  };
}
