import container from "@/style/container.module.css";
const HeightComponent = (title) => {
  return (
    <div className={container.secondDiv}>
      <p className={container.blueWord}>{title.description}</p>
      <h1>{title.header}</h1>
      <p>{title.date}</p>
      <div className={container["border-top-width"]}>
        <div className={container.lineBorderTop}> </div>
      </div>
    </div>
  );
};
export default HeightComponent;
