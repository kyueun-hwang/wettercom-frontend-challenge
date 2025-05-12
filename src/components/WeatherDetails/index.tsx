import { Icon } from "../Icon";
import { type ForecastSpace } from "@/app/types/forecast";
import styles from "./styles.module.css";

export const WeatherDetails = (space: ForecastSpace) => {
  const { typeLabel, weather, temperature, wind } = space;
  return (
    <div key={typeLabel} className={styles.weatherDetails}>
      <div className={styles.weatherDetailsItem}>
        <strong>{typeLabel}</strong>
      </div>

      <div className={styles.weatherDetailsItem}>
        <Icon {...weather} />
      </div>

      <div className={styles.weatherDetailsItem}>
        <div>
          {temperature.max}° / {temperature.min}°
        </div>
        <div>{weather.text}</div>
      </div>

      <div className={styles.weatherDetailsItem}>
        <div className={styles.windContainerItem}>
          <span style={{ transform: `rotate(${wind.degree}deg)` }}>↑</span>
          <span>{wind.text}</span>
        </div>
        <div>
          {wind.mean} {wind.unit}
        </div>
      </div>
    </div>
  );
};
