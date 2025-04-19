import styles from "./mainBanner.module.scss";
import React from "react";
import Image from "next/image";
const MainBanner = (props: any) => {
  const { compData } = props;
  return (
    <div id="promo-block" className={styles.sliderWrapper}>
      <div className={styles.bannerContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={compData?.imageSource}
          alt={compData?.imgAlt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
            <div className="container">
              <div className={styles.textContainer}>
                <div className={styles.heading} dangerouslySetInnerHTML={{ __html: compData?.heading }} />
                <div className={styles.subHeading} dangerouslySetInnerHTML={{ __html: compData?.subHeading }} />
                <div className={styles.buttonWrapper}>
                  <a href={compData?.url1}>{compData?.label1}</a>
                  <a href={compData?.url2}>{compData?.label2}</a>
                  <a href={compData?.url3}>{compData?.label3}</a>
                  <a href={compData?.url4}>{compData?.label4}</a>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};
export default MainBanner;
