import { WeatherList } from "@/components/WeatherList";
import { getForecastByLocationCode } from "@/lib/weatherService";
import { getForecastMetadata } from "@/lib/seo";
import { Link } from "@/components/Link";

interface Forecast7DaysPageProps {
  params: Promise<{ locationCode: string }>;
}

export const revalidate = 600;

export default async function Forecast7DaysPage({
  params,
}: Forecast7DaysPageProps) {
  const { locationCode } = await params;
  const forecastData = await getForecastByLocationCode(locationCode, 7);

  return (
    <div>
      <Link href={`/this-is-the-forecast-page/3-days/${locationCode}`}>
        Zur 3 Tage Übersicht
      </Link>
      <WeatherList items={forecastData.items} />
    </div>
  );
}

export async function generateMetadata({ params }: Forecast7DaysPageProps) {
  const { locationCode } = await params;
  return await getForecastMetadata(locationCode, 7);
}

export async function generateStaticParams() {
  return [{ locationCode: "DE0001020" }];
}
