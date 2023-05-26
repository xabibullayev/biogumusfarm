import Link from "next/link";
import style from "../styles/Main.module.scss";

function Main() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <span>BiogumusFarm & Tasty Food</span>
          <h1>
            Лучшие сушёные овощи, фрукты и орехи из Узбекистана! Попробуйте!
          </h1>
          <p>
            Самые вкусные и полезные продукты питания натурального производства,
            без консервантов от TASTY FOOD!
          </p>
          <Link href="/products">Подробнее</Link>
        </div>

        <div className={style.right}>
          <img src="/images/main.png" alt="" className={style.img} />
        </div>
      </div>
    </div>
  );
}

export default Main;
