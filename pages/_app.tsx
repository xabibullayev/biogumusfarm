import "~/styles/globals.css";
// import "~/styles/footer.scss";
// import "~/styles/about.scss";
// import "~/styles/aboutFeature.scss";
// import "~/styles/aboutUs.scss";
// import "~/styles/contact.scss";
// import "~/styles/contactUs.scss";
// import "~/styles/explore.scss";
// import "~/styles/new.scss";
// import "~/styles/rooms.scss";
// import "~/styles/room.scss";
// import "~/styles/slide.scss";
// import "~/styles/slider.scss";
// import "~/styles/navbar.scss";
// import "~/styles/singleRoom.scss";
// import "~/styles/tour.scss";
import { Jost } from "next/font/google";
import type { AppProps } from "next/app";

const jostFont = Jost({
  display: "swap",
  subsets: ["latin"],
  variable: "--jost-font",
});

import Header from "~/components/layout/Header";
import Navbar from "~/components/layout/Navbar";
import Footer from "~/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --jost-font: ${jostFont.style.fontFamily};
        }
      `}</style>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
