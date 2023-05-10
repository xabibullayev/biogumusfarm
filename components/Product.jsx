// import './room.scss'
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Product.module.scss";
import useTranslation from "next-translate/useTranslation";
import ProductCard from "./ProductCard";

function Product() {
  const { t } = useTranslation("common");

  const products1 = [
    {
      img: "/images/strong7.png",
      title: "Органические сушёные под солнцем помидоры San Marzano",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
    {
      img: "/images/strong7.png",
      title:
        " STRONG 7 - Смесь из натуральных сухофруктов и орехов, полезная для здоровья",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
  ];

  const products2 = [
    {
      img: "/images/strong7.png",
      title: "Орешкин! - Смесь самых вкусных солёных орехов",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
    {
      img: "/images/strong7.png",
      title: "Готовые к употреблению лучшие орехи в ассортименте",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
  ];

  const products3 = [
    {
      img: "/images/strong7.png",
      title: "Готовые к употреблению лучшие сухофрукты в ассортименте",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
    {
      img: "/images/strong7.png",
      title: "Полуфабрикаты - сушёные овощи в ассортименте",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
  ];

  const products4 = [
    {
      img: "/images/strong7.png",
      title: "Вкуснейшие семена подсолнуха (с солью и без)",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
    {
      img: "/images/strong7.png",
      title: "Лучшие финики в ассортименте",
      desc: "Смесь из сухофруктов и орехов «Strong7», включает в себя следующее сочетание 7 ми видов орехов и сухофруктов: Миндаль 15 гр, грецкий орех 15 гр, кешью 15гр, Семена тыквы 10 гр., изюм 15гр, курага 15гр, Вишня сушёная 15 гр, в DOY-Pack упаковке по 100 грамм с азотным наполнением;",
    },
  ];

  return (
    <div className={style.product}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Продукция</span>
          <h1>Наша Продукция</h1>
        </div>

        <div className={style.cards}>
          <div className={style.first}>
            {products1.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className={style.second}>
            {products2.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.first}>
            {products3.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className={style.second}>
            {products4.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
