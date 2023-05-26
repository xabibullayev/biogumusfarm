import Link from "next/link";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import style from "../../styles/Footer.module.scss";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const year = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation("common");

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.sponser}>
          <div className={style.img}>
            <img src="/images/sponser-1.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-2.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-3.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-4.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-5.png" alt="" className={style.img5} />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-6.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-7.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-8.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-9.png" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-10.jpg" alt="" />
          </div>
          <div className={style.img}>
            <img src="/images/sponser-11.png" alt="" />
          </div>
        </div>
        <div className={style.left}>
          <div className={style.logo}>
            <Image
              src="/images/biogumusfarm-logo.jpg"
              alt="logo"
              width={50}
              height={30}
              unoptimized={true}
            />
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={30}
              unoptimized={true}
            />
          </div>
          <div className={style.items}>
            <div className={style.item}>
              <span className={style.iconCover}>
                <IconPhone className={style.icon} />
              </span>
              +99897 357-70-77
            </div>
            <div className={style.item}>
              <span className={style.iconCover}>
                <IconMail className={style.icon} />
              </span>
              sales@biogumusfarm.com
            </div>
            <div className={style.item}>
              <div className={style.iconCover}>
                <IconMapPin className={style.icon} />
              </div>
              ул. Д.Эшимбетова, 52, 230100 г. Нукус, Республика Узбекистан
            </div>
          </div>
        </div>

        <div className={style.right}>
          {/* <div className={style.links}>
            <h2>{t("footer_links")}</h2>
            <ul>
              <li>
                <Link href="/">{t("menu_home")}</Link>
              </li>
              <li>
                <Link href="/">{t("menu_rooms")}</Link>
              </li>
              <li>
                <Link href="/">{t("menu_about")}</Link>
              </li>
              <li>
                <Link href="/">{t("menu_contact")}</Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div>
          <h2 className="font-bold text-[20px] mb-[30px] max-md:my-4">
            Мы в соцсетях
          </h2>
          <div className="flex max-md:items-center max-md:justify-center flex-col gap-2">
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="flex items-center gap-2"
              rel="noreferrer noopener"
            >
              <IconBrandInstagram />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://t.me/21345"
              target="_blank"
              className="flex items-center gap-2"
              rel="noreferrer noopener"
            >
              <IconBrandTelegram />
              <span>Telegram</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.copyright}>
        <div className={style.cover}>
          <span>© {year} Biogumusfarm & Tasty Food</span>
          <Link
            href="https://bizler.group?utm_source=tashkenthotel&utm_medium=footer&utm_campaign=footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("footer_developer")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
