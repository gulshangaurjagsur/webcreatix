import styles from "./overview.module.scss";
import React from "react";
const Overview = (props: any) => {
  const { compData } = props;
  return (
    <div id="about" className={styles.overviewWrapper}>
      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: compData?.heading }} />
        {compData?.subHeading && (
          <h3 dangerouslySetInnerHTML={{ __html: compData?.subHeading }} />
        )}
        <h4 dangerouslySetInnerHTML={{ __html: compData?.description }} />
      </div>
    </div>
  );
};
export default Overview;
