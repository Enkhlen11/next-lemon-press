import rowContainer from "@/style/rowContainer.module.css";
export const RowContainer = (item) => {
  return (
    <div className={rowContainer.titels}>
      <div className={rowContainer.borderSolidWidth}>
        <p>{item.date}</p>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export const PostLink = () => {
  return (
    <div className={rowContainer.kondi}>
      <img src="/monkondi.webp" alt="" />
    </div>
  );
};
