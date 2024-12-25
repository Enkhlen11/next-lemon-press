import styles from "./page.module.css";
import header from "@/style/header.module.css";
import container from "../style/container.module.css";
import rowContainer from "@/style/rowContainer.module.css";
import Header from "@/components/Header";
import News from "@/components/BreakingNews";
import Container from "@/components/Container";
import HeightComponent from "@/components/HeightComponent";
import { RowContainer, PostLink } from "@/components/RowContainer";

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

const scrollColumn = [
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🦄 Монгол компаниудын 2024 оны өнгө",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "💥 Банк + Уул уурхай",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🗺️ Технологи + ББСБ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🧑‍🤝‍🧑 Нэгдэн нийлэгсэд ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "✍️ Гэрэг-Turning Points: Дэлхийн стандартаар бэлтгэв",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🆙 ОУ-ын банкнууд санхүүжилтээ нэмэв",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "С🤔 Нүүрс: Экспорт = Тэнгэр, Үнэ = Газар",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🌱 $KHAN-н ногоон өсөлт ба үр дүн",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤥 Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🔥 Шинэ бонд айсуй",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "✋ Даатгал: 4+1=5",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "💰 Хамгийн том төгрөгийн бонд",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🪬 Хилийн чанад дахь хамгаалал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤥 Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "📢 Худалдааны дайн 2.0",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤡 Монголын ТОП асуудал: Өөртөө хэт итгэлтэй",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "📢 “Ухаалаг засаг” II = $40 тэрбум",
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
      <div className={rowContainer.rowArr}>
        <div className={rowContainer.scrollDiv}>
          <div className={rowContainer.booklet}>Товхимлууд</div>
          {scrollColumn.map((column) => {
            return <RowContainer date={column.date} title={column.title} />;
          })}
        </div>
        <PostLink />
        <div className={rowContainer["right-kondi"]}>
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
