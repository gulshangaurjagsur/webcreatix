import styles from "./header.module.scss";
import React from "react";
import Link from "next/link";
const Header = (props: any) => {
  const { compData } = props;
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className={styles.compWrapper}>
      <nav>
        <div className={styles.subHeaderWrapper}>
          <div className="container">
            <div className={styles.subHeader}>
              <div className={styles.contactWrapper}>
                <a href="mailto:info@webcreatix.com">
                  <i className="fa fa-sharp fa-regular fa-envelope"></i>
                  info@webcreatix.com
                </a>
                <a href="tel: +91 9999289454">
                  <i className="fa fa-solid fa-phone"></i>+91 9999289454
                </a>
              </div>
              <div className={styles.socialWrapper}>
                <i className="fa fa-brands fa-facebook"></i>&nbsp;&nbsp;
                <i className="fa fa-brands fa-twitter"></i>&nbsp;&nbsp;
                <i className="fa fa-brands fa-instagram"></i>&nbsp;&nbsp;
                <i className="fa fa-brands fa-linkedin"></i>&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
          <div className={styles.logo}><Link href="/"><i className="fa fa-globe" aria-hidden="true"></i> WebCreatix</Link></div>
          <ul className={styles.links}>
            {compData?.items?.map((item: any, index: number) => (
              <li key={index}>
                <a href={item?.url}>
                  {item?.label}
                  {item?.subLinks?.length > 0 && (
                    <div className={styles.subMenu}>
                      <ul>
                        {item?.subLinks?.map((item: any, key: number) => (
                          <li key={key}>
                            <a href={item?.url}>{item?.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <label htmlFor="nav-toggle" className={styles.iconBurger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </label>
        </div>
      </nav>
    </div>
  );
};
export default Header;
