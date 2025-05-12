import { type ForecastWeatherNearby } from "@/app/types/forecast";
import { Icon } from "../Icon";
import { WeatherDetails } from "../WeatherDetails";
import styles from "./styles.module.css";

export const WeatherList = ({ items }: ForecastWeatherNearby) => {
  return (
    <div>
      {items.map((item) => {
        const { summary, spaces } = item;
        const formattedDate = new Date(
          summary.date as string
        ).toLocaleDateString("DE");

        return (
          <details className={styles.accordionItem} key={item.summary.date}>
            <summary className={styles.accordionItemHeader}>
              <div>{formattedDate}</div>
              <Icon {...summary.weather} />
              <div>
                <span className={styles.temperatureMax}>
                  {summary.temperature.max}°
                </span>
                /<span>{summary.temperature.min}°</span>
              </div>
              <div>{summary.weather.text}</div>
            </summary>

            <div className={styles.accordionItemContent}>
              {spaces.map((space) => (
                <WeatherDetails key={space.type} {...space} />
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
};
