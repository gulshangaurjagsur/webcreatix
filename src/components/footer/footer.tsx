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
              <h2>Contact Us</h2>{" "}

              <p>
              Need IT assistance? Contact us now and experience top-notch technology solutions.
              </p>
              <h4>
                Office Location
              </h4>
              <img src="../../../images/india-flag.webp" title="India" alt="WebCreatix" />
              <p>23, Gangotri Apt, Sector 12, Dwarka New Delhi, India</p>

              <h4>
                For quick information, write to
              </h4>
          
              <a href="mailto:  info@webcreatix.com"> <i className="fa fa-envelope" aria-hidden="true"></i>  info@webcreatix.com</a>
            
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
            <h2>{compData?.about?.heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: compData?.about?.description,
              }}></div>
          </div>
          <div
            className={`col-md-4 col-sm-6 ${styles.footerWrapperCol} ${styles.servicesFooter} `}>
            <h2>{compData?.service?.heading}</h2>
            {compData?.service?.links?.map((item: any, index: number) => (
              <a href={item?.url} key={index}>
                {item?.label}
              </a>
            ))}
          </div>
          <div className={`col-md-4 col-sm-6 ${styles.footerWrapperCol} `}>
            <h2>{compData?.contact?.heading}</h2>
            <address
              dangerouslySetInnerHTML={{
                __html: compData?.contact?.address,
              }}></address>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className="container">
          <div className={styles.inner}>
            <div>{compData?.copyRight}</div>
            <div>
              <a href="#">Sitemap</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
