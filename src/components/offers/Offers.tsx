import Link from "next/link";
import styles from "./offers.module.scss";
import React from "react";
import { Image } from "react-bootstrap";
const Offers = (props: any) => {
  const { compData } = props;
  return (
    <>
      <section className={styles.ctaStrip}>
        <div className={styles.ctaContainer}>
          <div className={styles.logoBox}>
            <Link href="/">
              <img src="../../../images/logo-webcreatix.svg" alt="WebCreatix Logo, website design services in delhi" /></Link>
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
            <h2>Our Customer <span>Reviews</span></h2>
            <p>
              We take pride in delivering high-quality website development services
              with fast support, modern design, and client satisfaction.
            </p>
          </div>

          <div className={styles.reviewsGrid}>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Great experience with WebCreatix! Professional, responsive, and
                delivered a clean, SEO-friendly website on time. Highly recommended
                for anyone looking for quality web development services.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Khatu Shyam Builders</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Great Website Development Company! They did an amazing job on our
                website. The team was friendly, fast, and highly professional
                throughout the project.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Shankar Yadav</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Excellent services for website design in a very short timeframe.
                Highly satisfied with the quality and support provided by WebCreatix.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Hardesh Gupta</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “WebCreatix created a customised website for my business with a very
                professional and creative approach. Loved the final output.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Pankaj Gaur</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Fast, friendly, and result-oriented services. The communication was
                smooth and the project delivery was excellent.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Suman God</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★</div>

              <p className={styles.reviewText}>
                “Delivered a beautiful website before the deadline. Really appreciate
                the creativity, speed, and support from the team.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Vijay Kumar Gaur</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Excellent service at a very reasonable price. My website was live in
                just 2 days with a modern and professional design.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Jyoti Sharma</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Amazing experience working with WebCreatix. Professional support,
                beautiful design quality, and timely delivery made everything smooth.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Aarti Chauhan</h4>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Fantastic job on our website! Clean design, fast delivery, and great
                support from the team. Really happy with the overall service and professionalism.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Roshan Tiwari</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Great experience with WebCreatix! They designed a modern and responsive
                website for our business and provided excellent support throughout the project.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Anand Shukla</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Very satisfied with the services provided by WebCreatix. They designed a
                professional and fast website for our business with great attention to detail.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Abhay Kumar</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “WebCreatix delivered a clean, modern, and user-friendly website for our
                business. Their team was responsive and easy to work with.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Babusahaspur</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “Amazing experience with WebCreatix! They created a professional, fast, and
                modern website exactly as we wanted. Highly recommended.”
              </p>

              <div className={styles.reviewUser}>
                <h4>AKS SHUKLA JI</h4>
              </div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.reviewText}>
                “WebCreatix did an excellent job developing our startup website. The design
                is modern, fast, and perfectly aligned with our business goals.”
              </p>

              <div className={styles.reviewUser}>
                <h4>Jyoti Kumari</h4>
              </div>
            </div>
          </div>
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
              we bring our clients' visions to life with innovative technology and
              creative design.
            </p>
          </div>

          <div className={styles.slider}>
            <div className={styles.slideTrack}>

              {/* Repeat images twice for smooth infinite scroll */}

              <div className={styles.slide}>
                <img src="../../../images/client1.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client2.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client3.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client4.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client5.png" alt="WebCreatix" />
            </div>

            {/* Duplicate */}
            <div className={styles.slide}>
              <img src="../../../images/client6.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client7.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client8.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client9.png" alt="WebCreatix" />
            </div>

            <div className={styles.slide}>
              <img src="../../../images/client10.png" alt="WebCreatix" />
            </div>
            <div className={styles.slide}>
              <img src="../../../images/client11.png" alt="WebCreatix" />
            </div>
            <div className={styles.slide}>
              <img src="../../../images/client12.png" alt="WebCreatix" />
            </div>

          </div>
        </div>
</div>
      </section >



    </>
  );
};
export default Offers;
