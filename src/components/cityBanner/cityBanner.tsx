import { Image } from "react-bootstrap";
import styles from "./cityBanner.module.scss";
import React from "react";
const CityBanner = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.bannerWrapper}>
      <Image
        src={compData?.imageSource}
        className="img-fluid"
        alt={compData?.imageAlt}
      />
      
      <div className={styles.bannerText}>
        <h3>Crafting Modern Websites for {compData?.city} Businesses</h3>
        <p>Tailored Web Design & Development Solutions in {compData?.city}</p>
      </div>
    </div>
  );
};
export default CityBanner;
