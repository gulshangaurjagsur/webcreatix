import Image from "next/image";
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
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <Image
                    src={item?.imageSource}
                    alt="WebCreatix"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
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
