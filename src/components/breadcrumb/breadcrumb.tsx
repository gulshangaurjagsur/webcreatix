import Link from "next/link";
import styles from "./breadcrumb.module.scss";
import React from "react";
const Breadcrumb = (props: any) => {
  const { compData } = props;
  const displayName = compData?.name || compData?.city || "your city";
  const displayLocation = compData?.name && compData?.city && compData.name !== compData.city
    ? `${compData.name}, ${compData.city}`
    : displayName;

  const citySlug = compData?.city
    ? `/website-designing-company-in-${compData.city.toLowerCase()}`
    : "/";

  return (
    <div className={`container ${styles.Wrapper}`}>
      <p className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        {compData?.city && (
          <>
            {" / "}
            <Link href={citySlug}>{compData.city}</Link>
          </>
        )}
        {" / "}
        <span>Web Solutions in {displayLocation}</span>
      </p>
    </div>
  );
};
export default Breadcrumb;
