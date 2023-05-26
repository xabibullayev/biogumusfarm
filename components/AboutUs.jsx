import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import style from "../styles/AboutUs.module.scss";
import useTranslation from "next-translate/useTranslation";

function AboutUs({ page }) {
  const { t } = useTranslation("common");

  return (
    <div className={style.ourcompany}>
      <div className={style.container}>
        <div className={style.left}>
          <span className={style.title}>О НАС</span>
          <h1>
            Мы верим в пользу чистой натуральной продукции, лучшее от природы!
          </h1>
          <span className={style.desc}>
            Узбекистан - Сад Средней Азии, издавна знаменит своими вкусными
            овощами, фруктами и орехами! Мы гарантируем Вам доставку лучшей
            продукции Узбекистана.
          </span>
          <div className={style.icon}>
            <img src="images/about-icon.png" alt="" />
            <div className={style.text}>
              <h3>100% Полезная продукция</h3>
              <span>
                Наше производство, с 2001 года постоянно работает над улучшением
                качества продукции, и имеет сертификаты, отвечающие мировым
                стандартам, а именно: Ecocert Organic, EOS Organic, KOSHER,
                ISO22000:2018.
              </span>
            </div>
          </div>
          <button>О НАС</button>
        </div>
        <div className={style.right}>
          <div className={style.first}>
            <div>
              <i>
                Органические, полезные для здоровья продукты питания, без
                консервантов!
              </i>
            </div>
            <img
              src="images/working-3.jpg"
              alt=""
              style={{ height: "250px", borderRadius: "10px" }}
            />
          </div>
          <img src="images/about-shape-1.png" alt="" className={style.shape} />
          <div className={style.second}>
            <img
              src="images/working-2.jpg"
              alt=""
              style={{ height: "250px", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
