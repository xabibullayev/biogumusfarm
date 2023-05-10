import style from "../styles/About.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.top}>
          <img src="/images/biogumusfarm-logo.jpg" alt="" />

          <h2>Biogumusfarm & Tasty Food</h2>

          <img src="/images/logo.png" alt="" />
        </div>

        <p>
          Ф.Х. Биогумус из солнечного Узбекистана - один из круп-нейших
          производителей вяле-ных помидоров в Центральной Азии с более чем
          10-летним опытом производства и экс-порта в европейские страны. Наше
          производство сертифи-цировано в соответствии с международными
          стандарта-ми ISO22000: 2018 и ECOCERT Organic (EC) № 834/2007. Эти
          сертификаты не только гаран-тируют высокое качество гото-вой
          продукции, но и гаранти-руют безопасность и гигиену, постоянное
          повышение квали-фикации сотрудников, а также гарантируют высокий
          уровень заботы об окружающей среде. Мы контролируем всю
          произ-водственно-сбытовую цепочку, поэтому мы заботимся о каж-дом
          этапе процесса, от выбора семян для выращивания, сбора урожая,
          производства сушеных продуктов, упаковки и до до-ставки покупателю.
          После бережного сбора урожая и мытья спелых пло-дов, помидоры
          разрезают по-полам и присыпают солью, за-тем сушат на солнце в течение
          4-5 дней, проходят контроль качества на влажность, без-опасность, вкус
          и цвет и тща-тельно упаковывают в короб-ки. Хранится и поставляется
          при температуре +4 + 6 ° C.
        </p>

        <div className={style.center}>
          <h2>Качество и доставка</h2>

          <h3>Сертификаты:</h3>
          <ul className="list-disc pl-3">
            <li>
              Сертификат государственного стандарта Республики Узбекистан.
            </li>
            <li>ISO22000:2018 - Food safety management systems</li>
            <li>ECOCERT Organic Standard (EOS eq. EC No 834/2007)</li>
            <li>
              <img src="/images/about-1.jpg" alt="" />
              <img src="/images/about-2.jpg" alt="" />
              <img src="/images/about-3.jpg" alt="" />
            </li>
          </ul>

          <h3>Каждая доставка сопровождается:</h3>
          <ul>
            <li>
              Сертификат происхождения СТ1 или «FORM A» Республики Узбеки-стан
            </li>
            <li>Фито-санитарный сертификат Республики Узбекистан</li>
          </ul>
        </div>

        <div className={style.bottom}>
          <h2>Фото галерея</h2>

          <div className={style.images}>
            <img src="/images/about-photo-1.png" alt="" />
            <img src="/images/about-photo-2.jpg" alt="" />
            <img src="/images/about-photo-3.jpg" alt="" />
            <img src="/images/about-photo-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
