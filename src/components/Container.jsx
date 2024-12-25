import container from "@/style/container.module.css";
const Container = () => {
  return (
    <div className={container.firstDiv}>
      <img src="/truck.webp" alt="" />
      <div className={container.imgHeader}>
        <p className={container.blueWord}>БИЗНЕС</p>
        <h4>Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ</h4>
        <p>С. Ангирмаа / 12 сарын 18,2024</p>
      </div>
    </div>
  );
};

export default Container;
