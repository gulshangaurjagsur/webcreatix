import styles from "./portfolio.module.scss";
import React from "react";
const Portfolio = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.portfolio} id="portfolio">
      <div className="container">
        <h4>
          <strong>{compData?.heading}</strong>
        </h4>
        <div className="row">
          {compData?.item?.map((item: any, index: number) => (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.item}>
                <img src={item?.imageSource} className="img-fluid"  alt="WebCreatix" />
                <div className={styles.caption}>{item?.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
