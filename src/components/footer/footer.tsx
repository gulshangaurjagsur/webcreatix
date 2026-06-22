import { Image } from "react-bootstrap";
import ContactForm from "../form/contact";
import styles from "./footer.module.scss";
import React from "react";
import TrustIndex from "../trustIndex/trustIndex";
const Footer = (props: { compData: any; showContactSection?: boolean }) => {
  const { compData, showContactSection = true,  } = props;
  interface FooterProps {
  compData: any;
  showContactSection?: boolean;
  contactData?: any; // 👈 Add this line
}
  return (
    <div className={styles.footerWrapper} id="contact">
      {showContactSection  && (
      <div className={styles.contactWrapper}>
        <div className="container">
          <div className="row">
            <div className={` col-md-6 col-sm-6 ${styles.text} `}>
              <div className={styles.textHeading}>Contact Us</div>{" "}
              <p>
                Need IT assistance? Contact us now and experience top-notch
                technology solutions.
              </p>
              <div className={styles.headingText}>Office Location</div>
              <Image
                src="../../../images/india-flag.webp"
                title="India"
                alt="WebCreatix"
              />
              <p>C4/5A, Bhagwati Garden, Dwarka More, New Delhi, India</p>
              <div className={styles.headingText}>
                For quick information, connect to
              </div>
              <a href="tel: +919625791723">
                <i className="fa fa-solid fa-phone"></i> +91 9625791723
              </a>
              <br />
              <a href="mailto:info@webcreatix.com">
                {" "}
                <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                info@webcreatix.com
              </a>
            </div>
            <div className={` col-md-6 col-sm-6 ${styles.formWrapper} `}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      )}
      {/* <TrustIndex /> */}
      <div className={`container ${styles.footerMain} `}>
        <div className="row">
          <div className={`col-md-3 col-sm-6 ${styles.footerWrapperCol}`}>
            <div className={styles.heading}>{compData?.about?.heading}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: compData?.about?.description,
              }}
            />
          </div>
          <div
            className={`col-md-3 col-sm-6 ${styles.footerWrapperCol} ${styles.servicesFooter} `}
          >
            <div className={styles.heading}>{compData?.service?.heading}</div>
            {compData?.service?.links?.map((item: any, index: number) => (
              <a href={item?.url} key={index}>
                {item?.label}
              </a>
            ))}
          </div>
          <div
            className={`col-md-3 col-sm-6 ${styles.footerWrapperCol} ${styles.servicesFooter} `}
          >
            <div className={styles.heading}>{compData?.mainLink?.heading}</div>
            {compData?.mainLink?.links?.map((item: any, index: number) => (
              <a href={item?.url} key={index} target={item?.target}>
                {item?.label}
              </a>
            ))}
          </div>
          <div className={`col-md-3 col-sm-6 ${styles.footerWrapperCol} `}>
            <div className={styles.heading}>{compData?.contact?.heading}</div>
            <address
              dangerouslySetInnerHTML={{
                __html: compData?.contact?.address,
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className="container">
          <div className={styles.inner}>
            <div
              dangerouslySetInnerHTML={{
                __html: compData?.copyRight,
              }}
            />
          </div>
        </div>
      </div>
      <a
  href="https://wa.me/919625791723?text=Hello!%20I%20am%20interested%20in%20website%20development."
  id="whatsapp-btn"
  className={`${styles.whatsapp} fa fa-whatsapp`}
  rel="nofollow"
  target="_blank"
  aria-label="Chat on WhatsApp"
>
  <span className="sr-only">Chat on WhatsApp</span>
</a>

<a
  href="tel:+919625791723"
  id="call-btn"
  className={`${styles.phoneCall} fa fa-phone`}
  rel="nofollow"
  aria-label="Call Now"
>
  <span className="sr-only">Call Now</span>
</a>
    </div>
  );
};
export default Footer;
