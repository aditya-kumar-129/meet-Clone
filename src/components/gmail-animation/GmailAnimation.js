import React from "react";
import styles from "./GmailAnimation.module.css";

const GmailAnimation = () => {
  return (
    <div id={styles.loading}>
      <div className={styles.div2}>
        <div className={styles.div3} />
      </div>
      <div className={styles.div4}>
        <div className={styles.div5} />
        <div className={styles.div6}>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div9} />
              <div className={styles.div10}>
                <div className={styles.div11}>
                  <div className={styles.div12} />
                </div>
                <div className={styles.div13} />
              </div>
              <div className={styles.div14}>
                <div className={styles.div15} />
                <div className={styles.div16} />
                <div className={styles.div17} />
              </div>
              <div className={styles.div18} />
            </div>
            <div className={styles.div19}>
              <div className={styles.div20}>
                <div className={styles.div21} />
                <div className={styles.div22}>
                  <div className={styles.div23} />
                  <div className={styles.div24} />
                  <div className={styles.div25} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.nlpt}></div>
        <div className={`${styles.div26} ${styles.msg}`}>
          Loading Gmail&hellip;
        </div>
      </div>
    </div>
  );
};

export default GmailAnimation;
