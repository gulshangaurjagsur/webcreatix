"use client";
import Link from "next/link";
import styles from "./offers.module.scss";
import React from "react";
import { Image } from "react-bootstrap";
import homeData from "../../assets/data/homePage.json";
import Achievements from "../achievements/achievements";
const Offers = (props: any) => {
  const { compData } = props;
  return (
    <>
      <section className={styles.ctaStrip}>
        <div className={styles.ctaContainer}>
          <div className={styles.logoBox}>
            <Link href="/">
              <Image src="../../../images/logo-webcreatix.svg" alt="WebCreatix Logo, website design services in delhi" /></Link>
          </div>
          <h2>Need a Professional Website for Your Business?</h2>
          <a href="tel: +919625791723" className={styles.ctaBtn}><i className="fa fa-solid fa-phone"></i> +91 9625791723</a>
        </div>
      </section>

      <section className={styles.pricingSection} >
        <div className={`${styles.textContainer} container`}>
          <h2>Professional Responsive Website Designing Starting from ₹3,999</h2>
          <p>WebCreatix helps you design professional, mobile-friendly websites that not only look great but are built for performance. We focus on clean design, fast loading speed, and user-friendly layouts to ensure your visitors get a smooth experience across all devices.</p>
          <p>Our websites are thoughtfully designed to attract the right audience, engage them with clear messaging, and convert them into real customers. With transparent pricing, fast delivery, and no hidden charges, WebCreatix makes it easy for your business to build a strong and trustworthy online presence.</p>
          <h1 className="mt-5"><span>Special </span>Offers</h1>
          <div className="text-center">
            <a href="https://wa.me/919625791723" target="_blank" className={styles.discountBtn}>
              <span className={styles.clickText}>Click Here For</span>
              <span className={styles.blinkText}>10% DISCOUNT</span>

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
              <li>Free SSL Certificate (HTTPS)</li>
              <li>Basic Logo Design</li>
              <li>Contact Us Form Integration</li>
              <li>Email Notification Setup (Enquiry)</li>
              <li>Mobile Friendly Website</li>
              <li>Responsive Website</li>
              <li>Domain Name (Not Included)</li>

              <li className="mt-4"><a href="https://wa.me/919625791723" target="_blank" className={styles.discountBtn}>Get Started</a></li>

            </ul>
          </div>

          {/* BUSINESS PACKAGE */}
          <div className={` ${styles.pricingCard} ${styles.popular} ${styles.featured} `}>
            <span className={styles.badge}>Most Popular</span>
            <h3>BUSINESS PACKAGE</h3>
            <div className={styles.price}>₹5,999/-</div>
            <ul>
              <li>5 Pages Business Website</li>
              <li>1 Business Email ID</li>
              <li>SEO Ready Website</li>
              <li>Content Writing Work</li>
              <li>Free Hosting</li>
              <li>Free SSL Certificate (HTTPS)</li>
              <li>Logo Design</li>
              <li>Unlimited Images and Videos</li>
              <li>Unlimited Bandwidth & Storage</li>
              <li>Google Map Integration</li>
              <li>Order / Enquiry Form Integration</li>
              <li>Email Notification Setup (Enquiry)</li>
              <li>Social Media Integration</li>
              <li>WhatsApp Chat Integration</li>
              <li>Responsive Website</li>
              <li>Domain Name Assistance (Client Purchase)</li>


              <li className="mt-4"><a href="https://wa.me/919625791723" target="_blank" className={styles.discountBtn}>Choose Most Popular</a></li>
            </ul>
          </div>

          {/* E-COMMERCE PACKAGE */}
          <div className={styles.pricingCard}>
            <h3>E-COMMERCE PACKAGE</h3>
            <div className={styles.price}>₹9,999/-</div>
            <ul>
              <li>Product Showcase Website</li>
              <li>Unlimited Product Listing</li>
              <li>1 Business Email ID</li>
              <li>SEO Ready Website</li>
              <li>Content Writing Work</li>
              <li>Free Hosting</li>
              <li>Free SSL Certificate (HTTPS)</li>
              <li>Logo Design</li>
              <li>Unlimited Images and Videos</li>
              <li>Unlimited Bandwidth & Storage</li>
              <li>Razorpay Payment Integration (Basic)</li>
              <li>Order / Enquiry Form Integration</li>
              <li>Email Notification Setup (Order / Enquiry)</li>
              <li>Google Map Integration</li>
              <li>Social Media Integration</li>
              <li>WhatsApp Order / Chat Integration</li>
              <li>Responsive Website</li>
              <li>Domain Name Included(.in)</li>


              <li className="mt-4"><a href="https://wa.me/919625791723" target="_blank" className={styles.discountBtn}>Start Selling</a></li>
            </ul>
            <p>
              Note: This is a product showcase website with enquiry / WhatsApp order system and basic Razorpay payment integration. Advanced e-commerce features require backend upgrade.
            </p>
          </div>

        </div>
        <p className={styles.note}>No Hidden Charges | Free Support After Delivery | 100% Client Satisfaction</p>
      </section>

      <section className={styles.wcReviewsSection}>
        <div className="container">

          <div className={styles.sectionTitle}>
            <h2>
              Our Customer <span>Reviews</span>
            </h2>

            <p>From startups to growing businesses, our clients trust WebCreatix for professional website development, fast communication, modern UI, and dependable long-term support.</p>
          </div>
          <script defer async src='https://cdn.trustindex.io/loader.js?f970cfb72ff0665e018685e2834'></script>

        </div>
      </section>
      <section className={styles.portfolioSection}>
        <div className={styles.container}>

          <div className={styles.sectionTitle}>
            <h2>
              Our <span>Portfolio</span>
            </h2>

            <p>
              Our portfolio showcases a diverse range of projects that highlight our
              expertise in web development and design. From eCommerce solutions and
              responsive websites to custom interfaces and seamless user experiences,
              we bring our clients visions to life with innovative technology and
              creative design.
            </p>
          </div>

          <div className={styles.slider}>
            <div className={styles.slideTrack}>

              {/* Original Slides */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14].map((item, index) => (
                <div className={styles.slide} key={`first-${index}`}>
                  <Image
                    src={`/images/client${item}.png`}
                    width={300}
                    height={200}
                    alt="WebCreatix"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Duplicate Slides */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14].map((item, index) => (
                <div className={styles.slide} key={`second-${index}`}>
                  <Image
                    src={`/images/client${item}.png`}
                    width={300}
                    height={200}
                    alt="WebCreatix"
                    loading="lazy"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section >
      <Achievements compData={homeData?.achievements} />



    </>
  );
};
export default Offers;
