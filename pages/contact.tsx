import ContactUs from "~/components/ContactUs";
import style from "../styles/Contact.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <div className={style.contact}>
      <ContactUs />
    </div>
  );
}
