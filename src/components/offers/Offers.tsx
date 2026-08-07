"use client";
import Link from "next/link";
import styles from "./offers.module.scss";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import homeData from "../../assets/data/homePage.json";

import "swiper/css";
import "swiper/css/pagination";
import Achievements from "../achievements/achievements";
const Offers = (props: any) => {
  const { compData } = props;
  const clients = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState<string>("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBookWebsite = async () => {
    setLoadingPayment(true);
    setPaymentMessage("");

    try {
      const response = await fetch("/api/razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 99900,
          receipt: `book-website-advance-${Date.now()}`,
        }),
      });

      const order = await response.json();
      if (!response.ok) {
        throw new Error(order.error || "Unable to create payment order.");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: order.amount,
        currency: order.currency,
        name: "WebCreatix",
        description: "Book Website Advance Payment",
        order_id: order.id,
        handler: (paymentResponse: any) => {
          setPaymentMessage(
            `Payment successful! Payment ID: ${paymentResponse.razorpay_payment_id}`
          );
        },
        theme: {
          color: "#f05f02",
        },
      };

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        throw new Error("Razorpay checkout failed to load.");
      }
    } catch (error: any) {
      setPaymentMessage(error?.message || "Payment initialization failed.");
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <>
      <section className={styles.heroSlider}>
        <div className="container">
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
            {/* Slide 1 */}
            <SwiperSlide>
              <div className={styles.heroSlide}>
                <div className={styles.heroContent}>
                  <span className={styles.tag}>
                    <i className="fa fa-star"></i>&nbsp;&nbsp;Trusted Website Development Company
                  </span>

                  <h1>
                    Get a Professional Website <br />
                    for Your Business from ₹3,999
                  </h1>

                  <p className={styles.heroDescription}>
                    Get a modern, mobile-friendly website that helps your business
                    build trust, reach more customers and generate enquiries online.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="tel:+919625791723"
                      id="call-btn"
                      rel="nofollow"
                      aria-label="Call WebCreatix"
                      onClick={() => {
                        window.gtag?.("event", "phone_click");
                      }}
                      className={styles.primaryBtn}
                    >
                      <i className="fa fa-phone"></i>&nbsp;&nbsp;Talk to a Website Expert
                    </Link>

                    <Link
                      href="https://wa.me/919625791723?text=Hello!%20I%20want%20a%20professional%20website%20for%20my%20business.%20Please%20share%20the%20details."
                      id="whatsapp-btn"
                      rel="nofollow"
                      target="_blank"
                      aria-label="Chat on WhatsApp"
                      onClick={() => {
                        window.gtag?.("event", "whatsapp_click");
                      }}
                      className={styles.secondaryBtn}
                    >
                      <i className="fa fa-whatsapp"></i>&nbsp;&nbsp;WhatsApp Us
                    </Link>
                  </div>

                  <div className={styles.features}>
                    ✓ 200+ Websites Delivered &nbsp; | &nbsp;
                    ✓ Free SSL & Hosting &nbsp; | &nbsp;
                    ✓ 3–5 Days Delivery
                  </div>
                </div>

                <div className={styles.heroImage}>
                  <Image
                    src="../../../images/web-design.png"
                    loading="lazy"
                    alt="Professional business website development by WebCreatix"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            {/* Slide 2 */}
            <SwiperSlide>
              <div className={styles.heroSlide}>
                <div className={styles.heroContent}>
                  <span className={styles.tag}>
                    <i className="fa fa-th-large"></i>&nbsp;&nbsp;Take Your Business Online
                  </span>

                  <h2>
                    Turn Your Online Visitors <br />
                    into Real Customers
                  </h2>

                  <p className={styles.heroDescription}>
                    Your website is often the first impression of your business.
                    We build fast, professional and mobile-friendly websites designed
                    to make your customers trust and contact you.
                  </p>

                  <div className={styles.heroButtons}>
                    <Link
                      href="/portfolio"
                      className={styles.primaryBtn}
                    >
                      <i className="fa fa-line-chart"></i>&nbsp;&nbsp;View Our Work
                    </Link>

                    <Link
                      href="tel:+919625791723"
                      id="call-btn"
                      rel="nofollow"
                      aria-label="Call WebCreatix"
                      onClick={() => {
                        window.gtag?.("event", "phone_click");
                      }}
                      className={styles.secondaryBtn}
                    >
                      <i className="fa fa-phone"></i>&nbsp;&nbsp;Call Us Now
                    </Link>
                  </div>

                  <div className={styles.features}>
                    ✓ Mobile Responsive &nbsp; | &nbsp;
                    ✓ SEO Ready &nbsp; | &nbsp;
                    ✓ WhatsApp Integration &nbsp; | &nbsp;
                    ✓ No Hidden Charges
                  </div>
                </div>

                <div className={styles.heroImage}>
                  <Image
                    src="../../../images/business-growth.png"
                    loading="lazy"
                    alt="Grow your business online with a professional website"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </section>
      <Achievements compData={homeData?.achievements} />
      <section className={styles.missingOnlineSection}>
  <div className="container">
    <div className={styles.onlineGrid}>

      {/* Left Content */}
      <div className={styles.onlineContent}>

        <span className={styles.sectionTag}>
          <i className="fa fa-globe"></i>
          Grow Your Business Online
        </span>

        <h2>
          Is Your Business <span>Missing Online?</span>
        </h2>

        <p className={styles.onlineIntro}>
          Your customers are searching online before they decide whom to
          contact. Without a professional website, your business could be
          losing valuable customers to competitors.
        </p>

        <div className={styles.onlinePoints}>

          <div className={styles.onlinePoint}>
            <div className={styles.pointIcon}>
              <i className="fa fa-search"></i>
            </div>
            <div>
              <h3>Be Found on Google</h3>
              <p>
                Help potential customers discover your business when they
                search for your services online.
              </p>
            </div>
          </div>

          <div className={styles.onlinePoint}>
            <div className={styles.pointIcon}>
              <i className="fa fa-shield"></i>
            </div>
            <div>
              <h3>Build Customer Trust</h3>
              <p>
                A professional website makes your business look credible,
                established and trustworthy.
              </p>
            </div>
          </div>

          <div className={styles.onlinePoint}>
            <div className={styles.pointIcon}>
              <i className="fa fa-users"></i>
            </div>
            <div>
              <h3>Reach More Customers</h3>
              <p>
                Showcase your services, products and work to customers
                24 hours a day.
              </p>
            </div>
          </div>

          <div className={styles.onlinePoint}>
            <div className={styles.pointIcon}>
              <i className="fa fa-comments"></i>
            </div>
            <div>
              <h3>Get More Enquiries</h3>
              <p>
                Give customers an easy way to call, WhatsApp or enquire
                about your business.
              </p>
            </div>
          </div>

        </div>

        <div className={styles.onlineCta}>

          <Link
            href="tel:+919625791723"
            className={styles.onlinePrimaryBtn}
            onClick={() => {
              window.gtag?.("event", "phone_click");
            }}
          >
            <i className="fa fa-phone"></i>
            Talk to a Website Expert
          </Link>

          <Link
            href="https://wa.me/919625791723?text=Hello!%20I%20want%20to%20build%20a%20professional%20website%20for%20my%20business."
            target="_blank"
            rel="nofollow"
            className={styles.onlineSecondaryBtn}
            onClick={() => {
              window.gtag?.("event", "whatsapp_click");
            }}
          >
            <i className="fa fa-whatsapp"></i>
            WhatsApp Us
          </Link>

        </div>

      </div>


      {/* Right Side */}
      <div className={styles.onlineVisual}>

        <div className={styles.visualCard}>

          <div className={styles.visualIcon}>
            <i className="fa fa-laptop"></i>
          </div>

          <h3>
            Your Business Deserves
            <br />
            a Professional Online Presence
          </h3>

          <p>
            Let your customers find you, trust you and contact you —
            all from one professional website.
          </p>

          <div className={styles.visualStats}>

            <div>
              <strong>24/7</strong>
              <span>Online Presence</span>
            </div>

            <div>
              <strong>3–5</strong>
              <span>Days Delivery</span>
            </div>

            <div>
              <strong>₹3,999</strong>
              <span>Starting Price</span>
            </div>

          </div>

          <div className={styles.visualBottom}>
            <span>
              <i className="fa fa-check-circle"></i>
              Mobile Friendly
            </span>

            <span>
              <i className="fa fa-check-circle"></i>
              SEO Ready
            </span>

            <span>
              <i className="fa fa-check-circle"></i>
              WhatsApp Ready
            </span>
          </div>

        </div>

      </div>

    </div>
  </div>
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
            <span className={styles.badge}>For individuals & small businesses</span>
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
            <span className={styles.badge}>For growing businesses ⭐ Most Popular</span>
            <h3>BUSINESS PACKAGE</h3>
            <div className={styles.price}>₹7,999/-</div>
            <ul>
              <li>5 Pages Business Website</li>
              <li>Product Showcase Website</li>
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
            <span className={styles.badge}>For businesses selling products online</span>
            <h3>E-COMMERCE PACKAGE</h3>
            <div className={styles.price}>₹19,999/-</div>
            <ul>
              <li>Complete E-commerce Website</li>
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

      {/* <section className={styles.bookSection}>
        <div className="container">
          <div className={styles.bookCard}>
            <div className={styles.bookContent}>
              <h2>Book Your Website With ₹999 Advance</h2>
              <p>
                Reserve your website project today with a small advance payment.
                Pay securely through Razorpay and our team will contact you to
                finalize the design, content, and delivery timeline.
              </p>

              <div className={styles.bookDetails}>
                <div>
                  <strong>Advance Amount</strong>
                  <span>₹999</span>
                </div>
                <div>
                  <strong>Service</strong>
                  <span>Book your business website</span>
                </div>
              </div>

              <button
                className={styles.bookButton}
                onClick={handleBookWebsite}
                disabled={loadingPayment}
              >
                {loadingPayment ? "Processing Payment..." : "Pay ₹999 Advance"}
              </button>

              {paymentMessage && (
                <p className={styles.paymentMessage}>{paymentMessage}</p>
              )}

              <p className={styles.bookNote}>
                Secure checkout with Razorpay. After payment, we will reach out to
                begin your website booking.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className={styles.portfolioSection} id="portfolio">
        <div className={styles.container}>

          <div className={styles.sectionTitle}>
            <h2>Websites We've Built for Real Businesses</h2>
            <h4>See what your business website could look like.</h4>

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

              {[...clients, ...clients].map((item, index) => (
                <div className={styles.slide} key={index}>
                  <Image
                    src={`/images/client${item}.png`}
                    width={300}
                    height={300}
                    alt="WebCreatix"
                    loading="lazy"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section >
      {/* What You Get With Your Website */}
<section className={styles.websiteFeaturesSection}>
  <div className="container">

    <div className={styles.sectionHeading}>
      <span className={styles.sectionTag}>
        <i className="fa fa-check-circle"></i>
        Everything You Need
      </span>

      <h2>
        What You Get With Your <span>Website</span>
      </h2>

      <p>
        We don't just build a website. We give your business the tools
        it needs to build trust, attract customers and grow online.
      </p>
    </div>

    <div className={styles.featuresGrid}>

      {/* Feature 1 */}
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <i className="fa fa-mobile"></i>
        </div>

        <h3>Mobile Responsive</h3>

        <p>
          Your website will look great and work smoothly on mobile,
          tablet and desktop devices.
        </p>
      </div>

      {/* Feature 2 */}
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <i className="fa fa-bolt"></i>
        </div>

        <h3>Fast Loading</h3>

        <p>
          Optimized for speed so your visitors can access your website
          quickly without unnecessary waiting.
        </p>
      </div>

      {/* Feature 3 */}
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <i className="fa fa-search"></i>
        </div>

        <h3>SEO Ready</h3>

        <p>
          Built with a search-friendly structure to help your business
          establish a strong presence on Google.
        </p>
      </div>

      {/* Feature 4 */}
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <i className="fa fa-lock"></i>
        </div>

        <h3>Free SSL</h3>

        <p>
          Your website comes with secure HTTPS protection to keep your
          website and visitors safe.
        </p>
      </div>

      {/* Feature 5 */}
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <i className="fa fa-whatsapp"></i>
        </div>

        <h3>WhatsApp Integration</h3>

        <p>
          Let customers contact your business instantly through WhatsApp
          with an easy-to-use contact option.
        </p>
      </div>

      {/* Feature 6 */}
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <i className="fa fa-headphones"></i>
        </div>

        <h3>Ongoing Support</h3>

        <p>
          Get reliable assistance whenever you need help with your
          website after it goes live.
        </p>
      </div>

    </div>

    <div className={styles.featuresBottomCta}>
      <p>
        <i className="fa fa-check-circle"></i>
        Ready to build your business website?
      </p>

      <Link
        href="tel:+919625791723"
        className={styles.featuresCtaBtn}
        onClick={() => {
          window.gtag?.("event", "phone_click");
        }}
      >
        <i className="fa fa-phone"></i>
        Talk to a Website Expert
      </Link>
    </div>

  </div>
</section>
{/* How It Works */}
<section className={styles.howItWorksSection}>
  <div className="container">

    <div className={styles.sectionHeading}>
      <span className={styles.sectionTag}>
        <i className="fa fa-cogs"></i>
        Simple & Hassle-Free
      </span>

      <h2>
        Get Your Website in <span>3 Simple Steps</span>
      </h2>

      <p>
        From your first conversation to going live, we make the entire
        website development process simple and hassle-free.
      </p>
    </div>

    <div className={styles.stepsWrapper}>

      {/* Step 1 */}
      <div className={styles.stepItem}>

        <div className={styles.stepNumber}>
          01
        </div>

        <div className={styles.stepIcon}>
          <i className="fa fa-comments"></i>
        </div>

        <h3>Tell Us About Your Business</h3>

        <p>
          Call or WhatsApp us and tell us about your business,
          services and what you need from your website.
        </p>

      </div>

      {/* Connector */}
      <div className={styles.stepConnector}>
        <i className="fa fa-long-arrow-right"></i>
      </div>

      {/* Step 2 */}
      <div className={styles.stepItem}>

        <div className={styles.stepNumber}>
          02
        </div>

        <div className={styles.stepIcon}>
          <i className="fa fa-pencil-square-o"></i>
        </div>

        <h3>We Build Your Website</h3>

        <p>
          Our team designs and develops a professional website
          tailored to your business and brand.
        </p>

      </div>

      {/* Connector */}
      <div className={styles.stepConnector}>
        <i className="fa fa-long-arrow-right"></i>
      </div>

      {/* Step 3 */}
      <div className={styles.stepItem}>

        <div className={styles.stepNumber}>
          03
        </div>

        <div className={styles.stepIcon}>
          <i className="fa fa-rocket"></i>
        </div>

        <h3>Review & Go Live</h3>

        <p>
          Review your website, share your feedback and once everything
          looks good, your website goes live.
        </p>

      </div>

    </div>

    <div className={styles.howItWorksCta}>

      <div>
        <h3>Ready to take your business online?</h3>
        <p>
          Talk to us today and get a free consultation for your website.
        </p>
      </div>

      <Link
        href="tel:+919625791723"
        className={styles.howItWorksBtn}
        onClick={() => {
          window.gtag?.("event", "phone_click");
        }}
      >
        <i className="fa fa-phone"></i>
        Call Us Now
      </Link>

    </div>

  </div>
</section>




    </>
  );
};
export default Offers;
