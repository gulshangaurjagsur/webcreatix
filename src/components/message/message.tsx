import styles from "./message.module.scss";
import React from "react";
const Message = (props: any) => {
  const { compData } = props;
  return (
    <div id="message-block" className={styles.messageWrapper}>
      <div className={styles.textWrapper}>
        <h2
          dangerouslySetInnerHTML={{
            __html: compData?.heading,
          }}></h2>
        <em>{compData?.quote}</em>
      </div>
    </div>
  );
};
export default Message;
