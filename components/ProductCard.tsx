import Link from "next/link";
import style from "../styles/ProductCard.module.scss";
import Image from "next/image";

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
        <Image src={product.img} alt="" width={100} height={100} unoptimized />
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
