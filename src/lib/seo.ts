import { getForecastByLocationCode } from "@/lib/weatherService";
import type { Metadata } from "next";

export async function getForecastMetadata(
  locationCode: string,
  days: number = 3
): Promise<Metadata> {
  const forecastData = await getForecastByLocationCode(locationCode, days);
  const { timezone } = forecastData;

  return {
    title: `${timezone} - ${days} Tage Wettervorhersage`,
    description: `Wettervorhersage für die nächsten ${days} Tage in ${timezone}.`,
    openGraph: {
      title: `${timezone} - ${days} Tage Wetter`,
      description: `Sehen Sie das Wetter für die nächsten ${days} Tage in ${timezone}.`,
    },
  };
}
