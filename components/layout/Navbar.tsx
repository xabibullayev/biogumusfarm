"use client";
import { useState, useEffect, useCallback } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../../styles/Navbar.module.scss";
import useTranslation from "next-translate/useTranslation";
import {
  IconPhone,
  IconMail,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Image from "next/image";
import { locales } from "~/i18n";

function Navbar() {
  const { t, lang } = useTranslation("common");
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuClick, setIsMenuClick] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuClick(false);
  }, []);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={
        scrollPosition > 150 ? `${style.navbar} ${style.active}` : style.navbar
      }
    >
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/">
            <Image
              src="/images/biogumusfarm-logo.jpg"
              alt="biogumusfarm"
              width={30}
              height={30}
              unoptimized={true}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="biogumusfarm"
              width={30}
              height={30}
              unoptimized={true}
            />
          </Link>
        </div>
        <ul className={isMenuClick ? style.active : ""}>
          <div className={style.top}>
            <div className={style.logo}>
              <Link href="/">
                <Image
                  src="/images/biogumusfarm-logo.jpg"
                  alt="biogumusfarm"
                  width={30}
                  height={30}
                  unoptimized={true}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="biogumusfarm"
                  width={30}
                  height={30}
                  unoptimized={true}
                />
              </Link>
            </div>
            <div className={style.close} onClick={closeMenu}>
              <IconX className={style.icon} />
            </div>
          </div>

          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/about">О Нас</Link>
          </li>
          <li>
            <Link href="/products">Продукция</Link>
          </li>
          <li>
            <Link href="/packages">Упаковки</Link>
          </li>
          <li>
            <Link href="/safety">Требования о пищевой безопасности</Link>
          </li>
          <li>
            <Link href="/contact">Контакты</Link>
          </li>

          <li className={style.lang}>
            <div className="flex gap-2">
              {locales.map((lng) => {
                if (lng === lang) return null;

                return (
                  <Link
                    href="/"
                    locale={lng}
                    key={lng}
                    className="flex items-center mr-2"
                  >
                    <Image
                      src={`/images/${lng}.webp`}
                      width={20}
                      height={20}
                      alt={`${lang}`}
                      className="mr-1"
                    />
                    {t(`language-name-${lng}`)}
                  </Link>
                );
              })}
            </div>
          </li>

          <div className={style.bottom}>
            <h2>{t("menu_contact_info")}</h2>
            <div className={style.contact}>
              <div>
                <span className={style.iconWrapper}>
                  <IconMail className={style.icon} size={15} />
                </span>
                <span className={style.text}>sales@biogumusfarm.com</span>
              </div>
              <Link
                href={`tel:${t("phone_number_1")}`}
                className="ml-5 flex gap-1"
              >
                <span className={style.iconWrapper}>
                  <IconPhone className={style.icon} size={15} />
                </span>
                <div className="flex flex-col">
                  <span className={style.text}>+99897 357-70-77</span>
                </div>
              </Link>
            </div>
            <div className={style.links}>
              <div className={style.iconWrapper}>
                <IconBrandTelegram size={15} />
              </div>
              <div className={style.iconWrapper}>
                <IconBrandInstagram size={15} />
              </div>
              <div className={style.iconWrapper}>
                <IconBrandFacebook size={15} />
              </div>
            </div>
          </div>
        </ul>

        <div></div>

        <Link href="/book-now" className={style.bookNow}>
          Заказать
        </Link>

        <div className={style.menu} onClick={() => setIsMenuClick(true)}>
          <IconMenu2 className={style.icon} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
