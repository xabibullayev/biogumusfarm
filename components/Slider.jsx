import ImageSlider from "./ImageSlider";
import useTranslation from "next-translate/useTranslation";

function Slider() {
  const { t } = useTranslation("common");

  const slides = [
    {
      url: "/images/slider-bg-1.png",
      title: t("home_slider_title_1"),
    },
    {
      url: "/images/slider-bg-2.png",
      title: t("home_slider_title_2"),
    },
  ];

  return (
    <div className="slider">
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Slider;
