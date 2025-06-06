import styles from "./achievements.module.scss";
import React from "react";
const Achievements = (props: any) => {
  const { compData } = props;
  return (
    <div id="facts-block" className={styles.factsWrapper}>
      <div className={styles.textWrapper}>
        <div className="container">
          <div className="row">
            {compData?.item?.map((item: any, index: number) => (
              <div className="col-md-3 col-sm-3 col-xs-6" key={index}>
                <div className={styles.item}>
                  <strong>{item?.number}</strong><span>{item?.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievements;
