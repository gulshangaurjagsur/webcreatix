import styles from "./chooseUs.module.scss";
import React from "react";
import { Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
const ChooseUs = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.chooseUs} id="benefits">
      <div className="container">
        <div className={styles.textContainer}>
          <div className={styles.heading} dangerouslySetInnerHTML={{ __html: compData?.heading }} />
          <div className={styles.description}>{compData?.description}</div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <Image
              src={compData?.imageSource}
              className="img-responsive"
              alt="WebCreatix"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <Accordion defaultActiveKey="0">
              {compData?.item?.map((item: any, index: number) => (
                <Accordion.Item eventKey={item?.eventKey} key={index}>
                  <Accordion.Header>{item?.header}</Accordion.Header>
                  <Accordion.Body
                    dangerouslySetInnerHTML={{
                      __html: item?.body,
                    }} />
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;
