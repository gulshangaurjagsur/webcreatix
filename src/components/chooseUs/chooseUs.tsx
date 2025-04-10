import styles from "./chooseUs.module.scss";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
const ChooseUs = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.chooseUs} id="benefits">
      <div className="container">
        <div className={styles.textContainer}>
          <h2 dangerouslySetInnerHTML={{ __html: compData?.heading }}></h2>
          <h4>{compData?.description}</h4>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 text-left">
            <img
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
                    }}></Accordion.Body>
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
