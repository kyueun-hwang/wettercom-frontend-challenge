import type React from "react";
import styles from "../page.module.css";
import { Link } from "@/components/Link";

const ForecastPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main>
        <h1>Forecast Page</h1>
        <Link href="/">go to Home Page</Link>
        <Link href="/this-is-the-forecast-page/3-days/DE0001020">
          go to Berlin 3 Days Forecast Page
        </Link>
        <Link href="/this-is-the-forecast-page/7-days/DE0001020">
          go to Berlin 7 Days Forecast Page
        </Link>
      </main>
    </div>
  );
};

export default ForecastPage;
