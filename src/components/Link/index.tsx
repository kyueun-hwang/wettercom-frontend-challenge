import NextLink from "next/link";
import styles from "./styles.module.css";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <NextLink href={href} className={styles.link}>
      {children}
    </NextLink>
  );
};
