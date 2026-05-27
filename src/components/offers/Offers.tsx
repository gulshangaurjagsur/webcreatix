"use client";
import Link from "next/link";
import styles from "./offers.module.scss";
import React from "react";
import { Image } from "react-bootstrap";
import homeData from "../../assets/data/homePage.json";
import Achievements from "../achievements/achievements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const Offers = (props: any) => {
  const { compData } = props;
  return (
    <>
      {/* <section className={styles.ctaStrip}>
        <div className={styles.ctaContainer}>
          <div className={styles.logoBox}>
            <Link href="/">
              <Image src="../../../images/logo-webcreatix.svg" alt="WebCreatix Logo, website design services in delhi" /></Link>
          </div>
          <h2>Need a Professional Website for Your Business?</h2>
          <a href="tel: +919625791723" className={styles.ctaBtn}><i className="fa fa-solid fa-phone"></i> +91 9625791723</a>
        </div>
      </section> */}
      <section className={styles.heroSlider}>
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <div className={styles.heroSlide}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>
            ⭐ Trusted Website Designing Company
          </span>

          <h1>
            Professional Business Websites <br />
            Starting from ₹3,999
          </h1>

          <p>
            Responsive, fast-loading and mobile-friendly websites
            designed to grow your business online.
          </p>

          <div className={styles.heroButtons}>
            <Link
              href="/contact-us"
              className={styles.primaryBtn}
            >
              Get Free Quote
            </Link>

            <Link
              href="https://wa.me/919625791723"
              className={styles.secondaryBtn}
            >
              WhatsApp Now
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image src="../../../images/web-design.png" alt="WebCreatix Logo, website design services in delhi" />
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div className={styles.heroSlide}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>
            🚀 Grow Your Business Online
          </span>

          <h2>
            Modern Websites That Convert <br />
            Visitors into Customers
          </h2>

          <p>
            SEO-friendly, responsive and premium business websites
            designed to help your brand stand out online.
          </p>

          <div className={styles.heroButtons}>
            <Link
              href="#portfolio"
              className={styles.primaryBtn}
            >
              View Portfolio
            </Link>

            <Link
              href="tel:+919625791723"
              className={styles.secondaryBtn}
            >
              Call Now
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image src="../../../images/business-growth.png" alt="WebCreatix Logo, website design services in delhi" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>

      <section className={styles.pricingSection} >
        <div className={`${styles.textContainer} container`}>
          
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
      <section className={styles.portfolioSection} id="portfolio">
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
