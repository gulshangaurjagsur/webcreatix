import Image from "next/image";
import styles from "./industries.module.scss";
import React from "react";
import Link from "next/link";

const IndustriesCard = (props: any) => {
  const { compData } = props;

  return (
    <div className={styles.industriesWrapper}>
      {compData?.item?.map((item: any, index: number) => (
        <div
          className={
            item?.reverse
              ? `${styles.industries} ${styles.reverse}`
              : styles.industries
          }
          key={index}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={item?.imageSource}
              alt={item?.imageAlt || "Industry Image - WebCreatix"}
              width={600} // Adjust width as per your layout
              height={400} // Adjust height as needed
              layout="responsive" // For responsive scaling
              objectFit="cover" // Optional: Adjust fit (cover/contain)
              className="img-fluid"
              priority={index === 0} // Load first image early for LCP
            />
          </div>

          <div className={styles.textWrapper}>
            <h3>{item?.heading}</h3>
            <h4>{item?.subHeading}</h4>
            <p>{item?.data}</p>
            {item?.url && (
              <Link href={item?.url} className="btn btn-primary">
                {item?.label}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustriesCard;
