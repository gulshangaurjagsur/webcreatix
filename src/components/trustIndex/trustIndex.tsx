import styles from "./trustIndex.module.scss";
import React from "react";
const TrustIndex = () => {
  const reviews = [
    {
      stars: "★★★★★",
      text: "Great experience with WebCreatix! Professional, responsive, and delivered a clean, SEO-friendly website on time. Highly recommended for anyone looking for quality web development services.",
      user: "Khatu Shyam Builders",
    },
    {
      stars: "★★★★★",
      text: "Great Website Development Company! They did an amazing job on our website. The team was friendly, fast, and highly professional throughout the project.",
      user: "Shankar Yadav",
    },
    {
      stars: "★★★★★",
      text: "Excellent services for website design in a very short timeframe. Highly satisfied with the quality and support provided by WebCreatix.",
      user: "Hardesh Gupta",
    },
    {
      stars: "★★★★★",
      text: "WebCreatix created a customised website for my business with a very professional and creative approach. Loved the final output.",
      user: "Pankaj Gaur",
    },
    {
      stars: "★★★★★",
      text: "Fast, friendly, and result-oriented services. The communication was smooth and the project delivery was excellent.",
      user: "Suman God",
    },
    {
      stars: "★★★★",
      text: "Delivered a beautiful website before the deadline. Really appreciate the creativity, speed, and support from the team.",
      user: "Vijay Kumar Gaur",
    },
    {
      stars: "★★★★★",
      text: "Excellent service at a very reasonable price. My website was live in just 2 days with a modern and professional design.",
      user: "Jyoti Sharma",
    },
    {
      stars: "★★★★★",
      text: "Amazing experience working with WebCreatix. Professional support, beautiful design quality, and timely delivery made everything smooth.",
      user: "Aarti Chauhan",
    },
    {
      stars: "★★★★★",
      text: "Fantastic job on our website! Clean design, fast delivery, and great support from the team. Really happy with the overall service and professionalism.",
      user: "Roshan Tiwari",
    },
    {
      stars: "★★★★★",
      text: "Great experience with WebCreatix! They designed a modern and responsive website for our business and provided excellent support throughout the project.",
      user: "Anand Shukla",
    },
    {
      stars: "★★★★★",
      text: "Very satisfied with the services provided by WebCreatix. They designed a professional and fast website for our business with great attention to detail.",
      user: "Abhay Kumar",
    },
    {
      stars: "★★★★★",
      text: "WebCreatix delivered a clean, modern, and user-friendly website for our business. Their team was responsive and easy to work with.",
      user: "Babusahaspur",
    },
    {
      stars: "★★★★★",
      text: "Amazing experience with WebCreatix! They created a professional, fast, and modern website exactly as we wanted. Highly recommended.",
      user: "AKS SHUKLA JI",
    },
    {
      stars: "★★★★★",
      text: "WebCreatix did an excellent job developing our startup website. The design is modern, fast, and perfectly aligned with our business goals.",
      user: "Jyoti Kumari",
    },
    {
      stars: "★★★★★",
      text: "Excellent Experience",
      user: "HANUVANI",
    },
    {
      stars: "★★★★★",
      text: "Highly professional and talented website developer. He listens carefully to client requirements, gives valuable suggestions, and delivers quality work on time. Highly recommended for anyone looking for a trustworthy and skilled developer.",
      user: "AmanPreet Singh",
    },
    {
      stars: "★★★★★",
      text: "Excellent 👌",
      user: "Kalpana Kalpu",
    },
    {
      stars: "★★★★★",
      text: "Really Nice work and service they provide. Always on time dilivery.",
      user: "Vikas Raghuvanshi",
    },
    {
      stars: "★★★★★",
      text: "Excellent service by WebCreatix. Professional team, timely delivery, and great website design quality. Highly recommended for web development and digital marketing services.",
      user: "Manoj Thakur",
    },
    {
      stars: "★★★★★",
      text: "Thank you so much to the WebCreatix team for creating an amazing website for our business.",
      user: "sonu kumar",
    },
    {
      stars: "★★★★★",
      text: "Very nice experience with WebCreatix..good quality and on time project delivered. Very good team work .",
      user: "swapna samir",
    },
    {
      stars: "★★★★★",
      text: "Very professional team and excellent website quality. Thank you WebCreatix!",
      user: "Gudiya Sharma",
    },
    {
      stars: "★★★★★",
      text: "WebCreatix delivered our website exactly as we wanted. Great experience!",
      user: "Nagender Sharma",
    },
    {
      stars: "★★★★★",
      text: "Good work",
      user: "Vikash Vishal",
    },
    {
      stars: "★★★★★",
      text: "Great service",
      user: "Dipesh rana",
    },
    {
      stars: "★★★★★",
      text: "Great service great job",
      user: "anand singh",
    },
    {
      stars: "★★★★★",
      text: "Very delighted with the services of WebCreatix, quality work, affordable prices and smooth project execution👍",
      user: "sumit gupta",
    },
    {
      stars: "★★★★★",
      text: "Very Nice",
      user: "Vinod kumar",
    },
    {
      stars: "★★★★★",
      text: "I’ve been extremely impressed with the quality of work and customer service provided by WebCreatix. They take the time to understand requirements, provide practical recommendations, and deliver high-quality results. Their responsiveness and ongoing support make them a trusted partner for any web design or development project. Highly recommend their services !!",
      user: "Gunjan gupta",
    },
  ];

  const getInitial = (name: string) => {
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <section className={styles.wcReviewsSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Our Customer <span>Reviews</span></h2>
          <p>From startups to growing businesses, our clients trust WebCreatix for professional website development, fast communication, modern UI, and dependable long-term support.</p>
        </div>

        <div className={styles.reviewsSlider}>
          <div className={styles.slideTrack}>
            {[...reviews, ...reviews].map((review, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.reviewCard}>
                  <div className={styles.stars}>{review.stars}</div>
                  <div className={styles.reviewUser}>
                    <span className={styles.reviewAvatar}>{getInitial(review.user)}</span>
                    <h4>{review.user}</h4>
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustIndex;
