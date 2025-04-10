import styles from "./industries.module.scss";
import React from "react";
const IndustriesCard = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.industriesWrapper}>
      {compData?.item?.map((item: any, index: number) => (
        <div
          className={
            item?.reverse
              ? `${styles.industries} ${styles.reverse}`
              : styles.industries
          }
          key={index}>
          <div className={styles.imageWrapper}>
            <img src={item?.imageSource} className="img-fluid"  alt="WebCreatix" />
          </div>
          <div className={styles.textWrapper}>
            <h3>{item?.heading}</h3>
            <h4>{item?.subHeading}</h4>
            <p>{item?.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default IndustriesCard;
