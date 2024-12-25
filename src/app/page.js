import styles from "./page.module.css";
import header from "@/style/header.module.css";
import container from "../style/container.module.css";
import Header from "@/components/Header";
import News from "@/components/BreakingNews";
import Container from "@/components/Container";
import HeightComponent from "@/components/HeightComponent";

const componentArray = [
  {
    category: "САНХҮҮ",
    header: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    date: "М.Хулан/ 12 сарын 18, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Казакстаны хөгжлийн цаана",
    date: "М.Хулан/ 12 сарын 17, 2024",
  },
];

export default function Home() {
  return (
    <div className={header.bodyWidth}>
      <Header />
      <div className={header.rowImg}>
        <img src="./rowImg.png" alt="" />
      </div>
      <News />
      <div className={container.flexDiv}>
        <Container />
        <div className={container.plane}>
          <img src="/plane.webp" alt="" />
          {componentArray.map((oneObject) => {
            return (
              <HeightComponent
                description={oneObject.category}
                header={oneObject.header}
                date={oneObject.date}
              />
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
