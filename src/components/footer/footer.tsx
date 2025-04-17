import { Image } from "react-bootstrap";
import ContactForm from "../form/contact";
import styles from "./footer.module.scss";
import React from "react";
const Footer = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.footerWrapper} id="contact">
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
              <p>C4/5a, Bhagwati garden, Dwarka More, New Delhi, India</p>
              <div className={styles.headingText}>
                For quick information, connect to
              </div>
              <a href="tel: +919999289454">
                <i className="fa fa-solid fa-phone"></i> +91 9999289454
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
      <div className="container">
        <div className="row">
          <div className={`col-md-4 col-sm-6 ${styles.footerWrapperCol}`}>
            <div className={styles.heading}>{compData?.about?.heading}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: compData?.about?.description,
              }}
            />
          </div>
          <div
            className={`col-md-4 col-sm-6 ${styles.footerWrapperCol} ${styles.servicesFooter} `}
          >
            <div className={styles.heading}>{compData?.service?.heading}</div>
            {compData?.service?.links?.map((item: any, index: number) => (
              <a href={item?.url} key={index}>
                {item?.label}
              </a>
            ))}
          </div>
          <div className={`col-md-4 col-sm-6 ${styles.footerWrapperCol} `}>
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
            <div>
              {/* <a href="#">Sitemap</a>&nbsp;&nbsp;|&nbsp;&nbsp; */}
              <a href="privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=919999289454&amp;text=Hello! I have a Question?"
        id="whatsapp"
        className={`${styles.whatsapp} fa fa-whatsapp`}
        rel="nofollow"
        target="_blank"
        aria-label="Chat on WhatsApp"
      >
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
export default Footer;
