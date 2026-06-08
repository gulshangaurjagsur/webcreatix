"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./customers.module.scss";

type CustomerImage = {
  imageSource: string;
  imageAlt?: string;
  url?: string;
};

type CustomersProps = {
  compData?: {
    description?: string;
    clients?: CustomerImage[];
  };
};

const Customers = ({ compData }: CustomersProps) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const clients: CustomerImage[] = compData?.clients ?? Array.from({ length: 19 }, (_, index) => ({
    imageSource: `images/client${index}.png`,
    imageAlt: `Webcreatix client ${index}`,
  }));
  const isLoadMoreDisabled = visibleCount >= clients.length;

  const handleLoadMore = () => {
    setVisibleCount(clients.length);
  };

  return (
    <>
      <section className={styles.portfolioSection} id="portfolio">
        <div className={styles.container}>

          <div className={styles.sectionTitle}>
            <h2>
              Our <span>Portfolio</span>
            </h2>

            <p>
              {compData?.description ??
                "Our portfolio reflects the quality, creativity, and technical expertise we bring to every project. From business websites and eCommerce platforms to custom web applications and user-focused digital experiences, we deliver solutions that are visually appealing, highly functional, and tailored to meet our clients' unique goals. Each project showcases our commitment to innovation, performance, and long-term success."}
            </p>
          </div>

          <div className={styles.clientGrid}>
            {clients.slice(0, visibleCount).map((client, index) => {
              const href = client.url?.trim() || "#";
              const target = client.url ? "_blank" : undefined;

              return (
                <div className={styles.clientCard} key={index}>
                  <a href={href} target={target} rel={client.url ? "nofollow noopener noreferrer" : undefined}>
                    <Image
                      src={`/${client.imageSource}`}
                      alt={client.imageAlt ?? "Webcreatix clients"}
                      width={220}
                      height={120}
                      loading="lazy"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadMoreDisabled}
              style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                background: '#f05f02',
                color: '#fff',
                cursor: isLoadMoreDisabled ? 'not-allowed' : 'pointer',
                opacity: isLoadMoreDisabled ? 0.55 : 1,
              }}
            >
              More
            </button>
          </div>
        </div>
      </section>
      



    </>
  );
};
export default Customers;
