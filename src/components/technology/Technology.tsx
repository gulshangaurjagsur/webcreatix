import styles from "./technology.module.scss";
import React from "react";
const Technology = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>{compData?.heading}</h2>
            <h4>{compData?.subHeading}</h4>
            <ul>
            {compData?.description?.map((item: any, index: number) => (
              <li key={index}><span>{item?.tool}</span>{item?.detail}</li>
            ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <img src="/images/services.png"  alt="WebCreatix" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
