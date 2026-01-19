import styles from "./offers.module.scss";
import React from "react";
const Offers = (props: any) => {
  const { compData } = props;
  return (
    <>
    <section className={styles.ctaStrip}>
  <div className={styles.ctaContainer}>
    <h2>Need a Professional Website for Your Business?</h2>
    <a href="tel: +919625791723" className={styles.ctaBtn}><i className="fa fa-solid fa-phone"></i> +91 9625791723</a>
  </div>
</section>

    <section className={styles.pricingSection} >
      <h1><span>Special </span>Offers</h1>
      <div className={`${styles.textContainer} container`}>
        <h2>Professional Responsive Website Designing Starting from ₹3,999</h2>
      <p>WebCreatix helps you design professional, mobile-friendly websites that not only look great but also attract, engage, and convert customers, helping your business grow online with confidence.</p>
      <div className="text-center mt-5">
      <a href="https://wa.me/919625791723" className={styles.discountBtn}>
      <span className={styles.clickText}>Click Here For</span>
        <span className={styles.blinkText}>20% DISCOUNT</span>
        
      </a>
      </div>
      </div>
      
      <div className={`${styles.pricingGrid} container`}>

        {/* STARTER PACKAGE */}
        <div className={styles.pricingCard}>
          <h3>STARTER PACKAGE</h3>
          <div className={styles.price}>₹3,999/-</div>
          <ul>
            <li>Single Page Website</li>
            <li>SEO Ready Website</li>
            <li>Content Writing Work</li>
            <li>Free Hosting</li>
            <li>Free SSL Certificate (https)</li>
            <li>Logo Design</li>
            <li>Mobile Friendly Website</li>
            <li>Responsive Website</li>
          </ul>
        </div>

        {/* BUSINESS PACKAGE */}
        <div className={` ${styles.pricingCard} ${styles.featured} `}>
          <h3>BUSINESS PACKAGE</h3>
          <div className={styles.price}>₹5,999/-</div>
          <ul>
            <li>5 Pages</li>
            <li>1 Business Email Id</li>
            <li>SEO Ready Website</li>
            <li>Content Writing Work</li>
            <li>Free Hosting</li>
            <li>Free SSL Certificate (https)</li>
            <li>Logo Design</li>
            <li>Unlimited Images and Videos</li>
            <li>Unlimited (Bandwidth/Space)</li>
            <li>24/7 Support (Phone/Email/Chat)</li>
            <li>Social Media Integration</li>
            <li>Live Chat Integration</li>
            <li>Responsive Website</li>
          </ul>
        </div>

        {/* E-COMMERCE PACKAGE */}
        <div className={styles.pricingCard}>
          <h3>E-COMMERCE PACKAGE</h3>
          <div className={styles.price}>₹9,999/-</div>
          <ul>
            <li>5 Pages</li>
            <li>1 Business Email Id</li>
            <li>SEO Ready Website</li>
            <li>Content Writing Work</li>
            <li>Free Hosting</li>
            <li>Free SSL Certificate (https)</li>
            <li>Logo Design</li>
            <li>Unlimited Images and Videos</li>
            <li>Unlimited (Bandwidth/Space)</li>
            <li>Unlimited Product Listing</li>
            <li>24/7 Support (Phone/Email/Chat)</li>
            <li>Payment Gateway Integration</li>
            <li>Social Media Integration</li>
            <li>Live Chat Integration</li>
            <li>Responsive Website</li>
          </ul>
        </div>

      </div>
      <div className="text-center">
      <a href="https://wa.me/919625791723" className={styles.discountBtn}>
      <span className={styles.clickText}>Click Here</span>
      </a>
      </div>
    </section>
    </>
  );
};
export default Offers;
