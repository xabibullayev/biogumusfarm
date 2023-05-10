import Link from "next/link";
import style from "../styles/ProductCard.module.scss";

interface IProductProps {
  product: {
    img: string;
    title: string;
  };
}

function ProductCard({ product }: IProductProps) {
  return (
    <div className={style.productCard}>
      <div className={style.top}>
        <img src={product.img} alt="" />
      </div>

      <div className={style.bottom}>
        <h2>{product.title}</h2>

        <Link
          href={{
            pathname: "/single-product",
            query: product,
          }}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
