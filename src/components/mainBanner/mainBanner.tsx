import styles from "./mainBanner.module.scss";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const MainBanner = (props: any) => {
  const { compData } = props;
  let settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <div id="promo-block" className={styles.sliderWrapper}>
      <Slider {...settings}>
        {compData?.item?.map((item: any, index: number) => (
          <div key={index} className={styles.bannerContainer}>
            <img src={item?.imageSource}  alt="WebCreatix" />
            <div className="container">
              <div className={styles.textContainer}>
                <div className={styles.heading} dangerouslySetInnerHTML={{ __html: item?.heading }}></div>
                <div className={styles.subHeading} dangerouslySetInnerHTML={{ __html: item?.subHeading }}></div>
                <div className={styles.buttonWrapper}>
                  <a href={item?.url1}>{item?.label1}</a>
                  <a href={item?.url2}>{item?.label2}</a>
                  <a href={item?.url3}>{item?.label3}</a>
                  <a href={item?.url4}>{item?.label4}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MainBanner;
