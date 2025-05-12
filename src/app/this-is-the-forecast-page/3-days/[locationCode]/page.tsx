import { WeatherList } from "@/components/WeatherList";
import { getForecastMetadata } from "@/lib/seo";
import { getForecastByLocationCode } from "@/lib/weatherService";
import { Link } from "@/components/Link";

interface Forecast3DaysPageProps {
  params: Promise<{ locationCode: string }>;
}

export const revalidate = 600;

export default async function Forecast3DaysPage({
  params,
}: Forecast3DaysPageProps) {
  const { locationCode } = await params;
  const forecastData = await getForecastByLocationCode(locationCode, 3);

  return (
    <div>
      <Link href={`/this-is-the-forecast-page/7-days/${locationCode}`}>
        Zur 7 Tage Übersicht
      </Link>
      <WeatherList items={forecastData.items} />
    </div>
  );
}

export async function generateMetadata({ params }: Forecast3DaysPageProps) {
  const { locationCode } = await params;
  return await getForecastMetadata(locationCode, 3);
}

export async function generateStaticParams() {
  return [{ locationCode: "DE0001020" }];
}
