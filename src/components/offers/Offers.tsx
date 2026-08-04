"use client";
import Link from "next/link";
import styles from "./offers.module.scss";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const Offers = (props: any) => {
  const { compData } = props;
  const clients = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
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

                  <div className={styles.heroButtons}>
                    <Link
                      href="/contact-us"
                      className={styles.primaryBtn}
                    >
                      Get Free Quote
                    </Link>

                    <Link
                      href="https://wa.me/919625791723?text=Hello!%20I%20am%20interested%20in%20website%20development."
                      id="whatsapp-btn"
                      rel="nofollow"
                      target="_blank"
                      aria-label="Chat on WhatsApp"
                      onClick={() => {
                        window.gtag?.("event", "whatsapp_click");
                      }}
                      className={styles.secondaryBtn}
                    >
                      WhatsApp Now
                    </Link>
                  </div>
                  <div className={styles.features}>100+ Websites Delivered | Free SSL & Hosting | Delivery in 3-5 Days | No Hidden Charges</div>
                </div>

                <div className={styles.heroImage}>
                  <Image src="../../../images/web-design.png" loading="lazy" alt="WebCreatix website design company in delhi" />
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

                  <div className={styles.heroButtons}>
                    <Link
                      href="portfolio"
                      className={styles.primaryBtn}
                    >
                      View Portfolio
                    </Link>

                    <Link
                      href="tel:+919625791723"
                      id="call-btn"
                      rel="nofollow"
                      aria-label="Call Now"
                      onClick={() => {
                        window.gtag?.("event", "phone_click");
                      }}
                      className={styles.secondaryBtn}
                    >
                      Call Now
                    </Link>

                  </div>
                  <div className={styles.features}>100+ Websites Delivered | Free SSL & Hosting | Delivery in 3-5 Days | No Hidden Charges</div>
                </div>

                <div className={styles.heroImage}>
                  <Image src="../../../images/business-growth.png" loading="lazy" alt="Groy your business online with WebCreatix" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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

              {[...clients, ...clients].map((item, index) => (
                <div className={styles.slide} key={index}>
                  <Image
                    src={`/images/client${item}.png`}
                    width={300}
                    height={250}
                    alt="WebCreatix"
                    loading="lazy"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section >




    </>
  );
};
export default Offers;
