import Image from "next/image";
import style from "../styles/ChooseUs.module.scss";
import useTranslation from "next-translate/useTranslation";

function ChooseUs() {
  const { t } = useTranslation("common");

  return (
    <div className={style.chooseus}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Почему мы?</span>
          <h2>6 причин выбирать Tasty Food</h2>
        </div>

        <div className={style.content}>
          <div className={style.left}>
            <div className={style.item}>
              <div className={style.text}>
                <h3>
                  100% Натуральный продуктic (имеются органические сертификаты)
                </h3>
                <span></span>
              </div>
              <img src="images/why-choose-01.png" alt="" />
            </div>
            <div className={style.item}>
              <div className={style.text}>
                <h3>Чистота и безопасность ISO22000:2018</h3>
                <span></span>
              </div>
              <img src="images/why-choose-02.png" alt="" />
            </div>
            <div className={style.item}>
              <div className={style.text}>
                <h3>Без консервантов</h3>
                <span>
                  Продукция выращивается, перерабатывается и упаковывается без
                  химических добавок
                </span>
              </div>
              <img src="images/why-choose-03.png" alt="" />
            </div>
          </div>

          <div className={style.center}>
            <img src="images/why-choose-big.png" alt="" />
          </div>

          <div className={style.right}>
            <div className={style.item}>
              <img src="images/why-choose-04.png" alt="" />
              <div className={style.text}>
                <h3>Лучший дизайн упаковок</h3>
                <span></span>
              </div>
            </div>
            <div className={style.item}>
              <img src="images/why-choose-05.png" alt="" />
              <div className={style.text}>
                <h3>
                  (Doy-pack и вакуумная упаковки с использованием Fast Delivery
                  естественного Азота.
                </h3>
                <span></span>
              </div>
            </div>
            <div className={style.item}>
              <img src="images/why-choose-06.png" alt="" />
              <div className={style.text}>
                <h3>
                  Налажена логистика по доставке грузов по Узбекистану и всему
                  миру!
                </h3>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  s;
}

export default ChooseUs;
