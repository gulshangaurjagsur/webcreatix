import Link from "next/link";
import styles from "./breadcrumb.module.scss";
import React from "react";
const Breadcrumb = (props: any) => {
  const { compData } = props;
  return (
    <div className={`container ${styles.Wrapper}`}>
      <p className={styles.breadcrumb}>
        <Link href="/">Home</Link> /{" "}
        <span>Web Solutions in {compData.city}</span>
      </p>
    </div>
  );
};
export default Breadcrumb;
