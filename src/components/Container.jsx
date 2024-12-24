import styles from "@/style/container.module.css";
const Container = () => {
  return (
    <div className={styles.firstDiv}>
      <img src="/truck.webp" alt="" />
      <div className={styles.imgHeader}>
        <p className={styles.blueWord}>БИЗНЕС</p>
        <h4>Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ</h4>
        <p>С. Ангирмаа / 12 сарын 18,2024</p>
      </div>
    </div>
  );
};

export default Container;
