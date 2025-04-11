import { Image } from "react-bootstrap";
import styles from "./banner.module.scss";
import React from "react";
const Banner = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.bannerWrapper}>
      <Image src={compData?.imageSource} className="img-fluid" alt={compData?.imageAlt} />
    </div>
  );
};
export default Banner;
