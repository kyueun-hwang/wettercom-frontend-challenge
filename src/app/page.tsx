import type React from "react";
import styles from "./page.module.css";
import { Link } from "@/components/Link";
import { SomeImage } from "@/components/someImage";

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main>
        <h1>wetter.com coding challenge</h1>
        <Link href="/forecast">go to Forecast Page</Link>
        <SomeImage />
      </main>
    </div>
  );
};

export default HomePage;
