"use client";
import Link from "next/link";
import styles from "./offers.module.scss";
import React from "react";
import { Image } from "react-bootstrap";
import homeData from "../../assets/data/homePage.json";
import Achievements from "../achievements/achievements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const Offers = (props: any) => {
  const { compData } = props;
  return (
    <>
      <section className={styles.heroSlider}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
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
                <Image src="../../../images/web-design.png" alt="WebCreatix website design company in delhi" />
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
                <Image src="../../../images/business-growth.png" alt="Groy your business online with WebCreatix" />
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
{/* Slide 3 */}
<SwiperSlide>
  <div className={styles.heroSlide}>
    
    {/* LEFT CONTENT */}
    <div className={styles.heroContent}>
      <span className={styles.tag}>
        ⭐ Trusted by Businesses Across India
      </span>

      <h2>
        100+ Websites Delivered <br />
        With Fast & Professional Service
      </h2>

      {/* Trust Stats */}
      <div className={styles.trustGrid}>
        <div className={styles.trustCard}>
          <strong>100+</strong>
          <span>Websites Delivered</span>
        </div>

        <div className={styles.trustCard}>
          <strong>4.9★</strong>
          <span>Google Reviews</span>
        </div>

        <div className={styles.trustCard}>
          <strong>5 Days</strong>
          <span>Fast Delivery</span>
        </div>

        <div className={styles.trustCard}>
          <strong>24/7</strong>
          <span>Support Available</span>
        </div>
      </div>

      {/* <div className={styles.heroButtons}>
        <Link
          href="/contact-us"
          className={styles.primaryBtn}
        >
          Start Your Project
        </Link>

        <Link
          href="/offers"
          className={styles.secondaryBtn}
        >
          View Packages
        </Link>
      </div> */}
    </div>

    {/* RIGHT CLIENT LOGOS */}
    <div className={styles.clientLogoSection}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14].map(
        (item, index) => (
          <div className={styles.clientLogoCard} key={index}>
            <Image
              src={`/images/client${item}.png`}
              alt="WebCreatix Client Website"
            />
          </div>
        )
      )}
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
