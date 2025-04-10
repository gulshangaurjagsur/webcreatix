import styles from "./whyChoose.module.scss";
import React from "react";
const WhyChoose = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.Wrapper}>
      <div className="container">
        <div className={styles.offering}>
          <h1>{compData?.title}</h1>
          {compData?.items?.map((item: any, index: number) => (
            <div key={index}>
              <h4>
                <span dangerouslySetInnerHTML={{ __html: item?.icon }}></span>
                {item?.heading}
              </h4>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;
