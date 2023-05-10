import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import style from "../styles/Explore.module.scss";
import useTranslation from "next-translate/useTranslation";

function Explore() {
  const { t } = useTranslation("common");
  return (
    <div className={style.explore}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Исследовать</span>
          <h1>Органические и чистые продукты</h1>
          <p>
            Рассмотрим, как некоторые поисковые системы автоматически исправляют
            расходы.
          </p>
        </div>

        <div className={style.items}>
          <div className={style.first}>
            <div className={style.item}>
              <div className={style.container}>
                <img src="/images/step-1.png" alt="" />
                <h2>Планирование</h2>
                <p>
                  Рассмотрим, как некоторые поисковые системы автоматически
                  исправляют расходы.
                </p>

                <Link href="/">
                  Читать далее <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.container}>
                <img src="/images/step-2.png" alt="" />
                <h2>Посев</h2>
                <p>
                  Рассмотрим, как некоторые поисковые системы автоматически
                  исправляют расходы.
                </p>

                <Link href="/">
                  Читать далее
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
          </div>
          <div className={style.second}>
            <div className={style.item}>
              <div className={style.container}>
                <img src="/images/step-3.png" alt="" />
                <h2>Гарантия качества</h2>
                <p>
                  Рассмотрим, как некоторые поисковые системы автоматически
                  исправляют расходы.
                </p>

                <Link href="/">
                  Читать далее
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.container}>
                <img src="/images/step-4.png" alt="" />
                <h2>Маркетинг</h2>
                <p>
                  Рассмотрим, как некоторые поисковые системы автоматически
                  исправляют расходы.
                </p>

                <Link href="/">
                  Читать далее
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
