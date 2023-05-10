import AboutUs from "~/components/AboutUs";
import Explore from "~/components/Explore";
import New from "~/components/New";
import Product from "~/components/Product";
import ChooseUs from "~/components/ChooseUs";
import Main from "~/components/Main";

export default function Home() {
  return (
    <>
      <Main />
      <AboutUs page="home" />
      <Explore />
      <Product />
      <ChooseUs />
      <New />
    </>
  );
}
