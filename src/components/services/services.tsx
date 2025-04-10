import styles from "./services.module.scss";
import React from "react";
const Services = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.services} id="services">
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: compData?.heading }}></h2>
        {compData?.subHeading && <h4>{compData?.subHeading}</h4>}
        <div className="row">
          {compData?.item?.map((item: any, index: number) => (
            <div
              className={` "col-md-3 col-sm-3 col-xs-12" ${styles.item} `}
              key={index}>
              <i className={` fa ${item?.serviceIcon} `}></i>
              <h3>{item?.serviceName}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: item?.serviceDescription,
                }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
