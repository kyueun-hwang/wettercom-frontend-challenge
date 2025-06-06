export type ForecastWeatherNearby = {
  items: Array<{
    summary: ForecastSummary;
    spaces: Array<ForecastSpace>;
  }>;
};

type ForecastSummary = {
  date: string | null;
  temperature: {
    min: number | null;
    max: number | null;
    avg?: number | null;
  };
  weather: {
    state: number | null;
    icon: string | null;
    text: string | null;
  };
};

export type ForecastSpace = {
  type?: string; //"morning" | "afternoon" | "evening" | "night";
  typeLabel: string;
  from: string | null;
  to: string | null;
  weather: {
    icon: string | null;
    text: string | null;
  };
  temperature: {
    min: number | null;
    max: number | null;
  };
  wind: {
    mean: number | null;
    unit: string | null;
    degree: number | null;
    text: string | null;
  };
};
