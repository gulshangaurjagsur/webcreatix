import styles from "./trustIndex.module.scss";
import React from "react";
const TrustIndex = () => {
  return (
    <section className={styles.wcReviewsSection}>
      <div className="container">

        <div className={styles.sectionTitle}>
          <h2>
            Our Customer <span>Reviews</span>
          </h2>

          <p>From startups to growing businesses, our clients trust WebCreatix for professional website development, fast communication, modern UI, and dependable long-term support.</p>
        </div>
        <script defer async src='https://cdn.trustindex.io/loader.js?f970cfb72ff0665e018685e2834'></script>

      </div>
    </section>
  );
};
export default TrustIndex;
