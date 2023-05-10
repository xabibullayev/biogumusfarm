import Product from "~/components/Product";
import style from "../styles/Rooms.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Rooms() {
  const { t } = useTranslation("common");

  return (
    <div className={style.products}>
      <Product />
    </div>
  );
}
