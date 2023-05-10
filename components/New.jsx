// import './new.scss'
import Image from "next/image";
import Link from "next/link";
import style from "../styles/New.module.scss";

function New() {
  return (
    <div className={style.new}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Наш блог</span>
          <h1>Последний блог и новости</h1>
        </div>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.top}>
              <Image src="/images/new-1.jpg" width={200} height={250} alt="" />
            </div>
            <div className={style.bottom}>
              <span>3rd Aprip 2023</span>
              <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <Link href="/">ЧИТАТЬ ДАЛЕЕ</Link>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.top}>
              <Image src="/images/new-2.jpg" width={200} height={250} alt="" />
            </div>
            <div className={style.bottom}>
              <span>3rd Aprip 2023</span>
              <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <Link href="/">ЧИТАТЬ ДАЛЕЕ</Link>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.top}>
              <Image src="/images/new-3.jpg" width={200} height={250} alt="" />
            </div>
            <div className={style.bottom}>
              <span>3rd Aprip 2023</span>
              <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>

              <Link href="/">ЧИТАТЬ ДАЛЕЕ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
