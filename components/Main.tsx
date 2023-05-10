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
          <button>Заказать</button>
        </div>

        <div className={style.right}>
          <img src="/images/strong7.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
