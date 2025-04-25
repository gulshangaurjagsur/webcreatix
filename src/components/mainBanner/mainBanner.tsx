import styles from "./mainBanner.module.scss";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const MainBanner = (props: any) => {
  const { compData } = props;

  const headingWords =
    compData?.heading?.replace(/<[^>]*>/g, "")?.split(" ") || [];
  const subHeadingWords =
    compData?.subHeading?.replace(/<[^>]*>/g, "")?.split(" ") || [];

  return (
    <div id="promo-block" className={styles.sliderWrapper}>
      <div className={styles.bannerContainer}>
        <div className={styles.imageWrapper}></div>
        <div className="container">
          <div className={styles.textContainer}>
            {/* Animated Heading */}
            <motion.div
              className={styles.heading}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {headingWords.map((word: string, i: number) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  style={{ display: "inline-block", marginRight: "8px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Animated Subheading */}
            <motion.div
              className={styles.subHeading}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {subHeadingWords.map((word: string, i: number) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  style={{ display: "inline-block", marginRight: "6px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <div className={styles.buttonWrapper}>
              <a href={compData?.url1}>{compData?.label1}</a>
              <a href={compData?.url2}>{compData?.label2}</a>
              <a href={compData?.url3}>{compData?.label3}</a>
              <a href={compData?.url4}>{compData?.label4}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
