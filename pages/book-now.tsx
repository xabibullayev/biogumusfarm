import ImageSlider from "~/components/ImageSlider";

export default function BookNow() {
  const slides = [
    { url: "/images/testimonial-bg.png", title: "" },
    { url: "/images/testimonial-bg.png", title: "" },
  ];
  return <ImageSlider slides={slides} page="book-now" />;
}
