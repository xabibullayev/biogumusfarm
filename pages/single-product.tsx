import style from "../styles/SingleProduct.module.scss";
import useTranslation from "next-translate/useTranslation";
import { IconStarFilled } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function About() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const data = router.query;

  return (
    <div className={style.single}>
      <div className={style.container}>
        <div className={style.product}>
          <div className={style.img}>
            <img src="/images/strong7.png" alt="" />
          </div>

          <div className={style.right}>
            <div className={style.stars}>
              <IconStarFilled className={style.star} />
              <IconStarFilled className={style.star} />
              <IconStarFilled className={style.star} />
              <IconStarFilled className={style.star} />
              <IconStarFilled className={style.star} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
