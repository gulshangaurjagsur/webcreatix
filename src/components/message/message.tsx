import styles from "./message.module.scss";
import React from "react";
const Message = (props: any) => {
  const { compData } = props;
  return (
    <div id="message-block" className={styles.messageWrapper}>
      <div className={styles.textWrapper}>
        <span
          dangerouslySetInnerHTML={{
            __html: compData?.heading,
          }}></span>
        <em>{compData?.quote}</em>
      </div>
    </div>
  );
};
export default Message;
