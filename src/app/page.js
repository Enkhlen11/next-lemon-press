import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      hello world
      <Header />
      <div></div>
    </div>
  );
}
