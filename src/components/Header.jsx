import header from "@/style/header.module.css";
const Header = () => {
  return (
    <div className={header["top-header"]}>
      <div className={header.header}>
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        <div className={header.flexed}>
          <p>Товхимол</p>
          <p>Нийтлэлүүд</p>
          <p>Цувралууд</p>
          <p>Подкаст</p>
          <p>Бидний тухай</p>
        </div>
      </div>
      <div className={header["ikon-button"]}>
        <svg
          className={header.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <button className={header.searchButton}>Уншаад үзье</button>
      </div>
    </div>
  );
};
export default Header;
