import { Image } from "react-bootstrap";
import styles from "./cityBanner.module.scss";
import React from "react";
const CityBanner = (props: any) => {
  const { compData } = props;
  const displayName = compData?.name || compData?.city || "your city";
  const displayLocation = compData?.name && compData?.city && compData.name !== compData.city
    ? `${compData.name}, ${compData.city}`
    : compData?.city || compData?.name || "your city";

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerText}>
        <h3>Crafting Modern Websites for {displayName} Businesses</h3>
        <p>Tailored Web Design & Development Solutions in {displayLocation}</p>
      </div>
      <Image
        src={compData?.imageSource}
        className="img-fluid"
        alt={compData?.imageAlt}
      />
      
      
    </div>
  );
};
export default CityBanner;
