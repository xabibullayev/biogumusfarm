import Image from "next/image";
import style from "../styles/AboutFeature.module.scss";
import useTranslation from "next-translate/useTranslation";

function AboutFeature() {
  const { t } = useTranslation("common");

  return (
    <div className={style.aboutFeature}>
      <div className={style.container}>
        <div className={style.title}>
          <span>{t("about_feature_sub_title")}</span>
          <h1>{t("about_feature_title")}</h1>
          <p>{t("about_feature_desc")}</p>
        </div>
        <div className={style.features}>
          <div className={style.left}>
            <div className={style.items}>
              <div className={style.item}>
                <Image
                  src="/images/about-feature-1.jpg"
                  width={200}
                  height={250}
                  alt=""
                />
                <h2>{t("about_feature_1_title")}</h2>
                <span>{t("about_feature_1_desc")}</span>
                <b></b>
              </div>
              <div className={style.item}>
                <Image
                  src="/images/about-feature-2.jpeg"
                  width={200}
                  height={250}
                  alt=""
                />
                <h2>{t("about_feature_3_title")}</h2>
                <span>{t("about_feature_3_desc")}</span>
                <b></b>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.items}>
              <div className={style.item}>
                <Image
                  src="/images/about-feature-3.jpg"
                  width={200}
                  height={250}
                  alt=""
                />
                <h2>{t("about_feature_2_title")}</h2>
                <span>{t("about_feature_2_desc")}</span>
                <b></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFeature;
