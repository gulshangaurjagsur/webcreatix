import styles from "./textCard.module.scss";
import React from "react";
const TextCard = () => {
  // const { compData } = props;
  return (
    <div className="container">
      <div className={styles.textCardWrapper}>
        <div className={styles.imageWrapper}>
          <img src="images/dumey.jpg" className="img-fluid"  alt="WebCreatix" />
        </div>
        <div className={styles.textWrapper}>
          <h3>Integrity</h3>
          <h4>Duis leo metus, lacinia nec sem non</h4>
          <p>
            Cras sollicitudin maximus nunc quis varius. Duis ut nunc ac massa
            tincidunt efficitur eu a nisi. Quisque efficitur quis tellus et
            ornare. Etiam arcu eros, accumsan ut sapien elementum, varius
            dignissim tortor. Proin a ipsum faucibus urna condimentum gravida id
            ac purus. Duis leo metus, lacinia nec sem non, tincidunt tempor mi.
            Maecenas mattis ligula ut nunc tristique laoreet.
          </p>
        </div>
      </div>
      <div className={` ${styles.textCardWrapper} ${styles.reverse}`}>
        <div className={styles.imageWrapper}>
          <img src="images/dumey.jpg" className="img-fluid"  alt="WebCreatix" />
        </div>
        <div className={styles.textWrapper}>
          <h3>Trust</h3>
          <h4>Duis leo metus, lacinia nec sem non</h4>
          <p>
            Cras sollicitudin maximus nunc quis varius. Duis ut nunc ac massa
            tincidunt efficitur eu a nisi. Quisque efficitur quis tellus et
            ornare. Etiam arcu eros, accumsan ut sapien elementum, varius
            dignissim tortor. Proin a ipsum faucibus urna condimentum gravida id
            ac purus. Duis leo metus, lacinia nec sem non, tincidunt tempor mi.
            Maecenas mattis ligula ut nunc tristique laoreet.
          </p>
        </div>
      </div>
      <div className={styles.textCardWrapper}>
        <div className={styles.imageWrapper}>
          <img src="images/dumey.jpg" className="img-fluid"  alt="WebCreatix" />
        </div>
        <div className={styles.textWrapper}>
          <h3>Relationship</h3>
          <h4>Duis leo metus, lacinia nec sem non</h4>
          <p>
            Cras sollicitudin maximus nunc quis varius. Duis ut nunc ac massa
            tincidunt efficitur eu a nisi. Quisque efficitur quis tellus et
            ornare. Etiam arcu eros, accumsan ut sapien elementum, varius
            dignissim tortor. Proin a ipsum faucibus urna condimentum gravida id
            ac purus. Duis leo metus, lacinia nec sem non, tincidunt tempor mi.
            Maecenas mattis ligula ut nunc tristique laoreet.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TextCard;
