import styles from "@/style/container.module.css";
const HeightComponent = (title) => {
  return (
    <div className={styles.secondDiv}>
      <p className={styles.blueWord}>{title.description}</p>
      <h1>{title.header}</h1>
      <p>{title.date}</p>
      <div className={styles["border-top-width"]}>
        <div className={styles.lineBorderTop}> </div>
      </div>
    </div>
  );
};
export default HeightComponent;
