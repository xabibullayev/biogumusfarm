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
          <img src="/images/1.1.png" alt="" className={style.img1} />
          <img src="/images/2.1.png" alt="" className={style.img2} />
          <img src="/images/3.1.png" alt="" className={style.img3} />
          <img src="/images/4.1.png" alt="" className={style.img4} />
          <img src="/images/5.1.png" alt="" className={style.img5} />
          <img src="/images/6.1.png" alt="" className={style.img6} />
          <img src="/images/7.1.png" alt="" className={style.img7} />
          <img src="/images/8.1.png" alt="" className={style.img8} />
        </div>
      </div>
    </div>
  );
}

export default Main;
