import styles from "./benefits.module.scss";
import React from "react";
const Benefits = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.Wrapper}>
      <div className="container">
      <div className="row">
      {compData?.map((item: any, index: number) => (
        <div className="col-md-3" key={index}>
          <div className={styles.benefits}>
            <div className={styles.Icon}>
              <span dangerouslySetInnerHTML={{ __html: item?.icon }} />
            </div>
            <div className={styles.content}>
            <h4 dangerouslySetInnerHTML={{ __html: item?.subHeading }} />
            <p dangerouslySetInnerHTML={{ __html: item?.description }} />
            </div>
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default Benefits;
