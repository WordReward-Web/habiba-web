import { Container } from "react-bootstrap";
// import Link from "next/link";
import styles from "./pagePresentationHeader.module.css";
// import Breadcrumb from "react-bootstrap/Breadcrumb";

const PagePresentationHeader = ({ content }) => {
  const { pageHeadingTxt, mainPage, inBetweenPages, currentPageTxt } = content;
  return (
    <div className={styles.header}>
      <Container>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className={styles.heading}>{pageHeadingTxt}</h1>
          {/* <Breadcrumb
            className={`d-flex justify-content-md-end ${styles.breadcrumb}`}
          >
            <Breadcrumb.Item href={mainPage.route}>
              <Link href={mainPage.route} passHref>
                {mainPage.txt}
              </Link>
            </Breadcrumb.Item>
            {inBetweenPages &&
              inBetweenPages.map((inBetweenPage, index) => {
                return (
                  <Breadcrumb.Item key={index} href={inBetweenPage.route}>
                    <Link href={inBetweenPage.route} passHref>
                      {inBetweenPage.txt}
                    </Link>
                  </Breadcrumb.Item>
                );
              })}
            <Breadcrumb.Item active>{currentPageTxt}</Breadcrumb.Item>
          </Breadcrumb> */}
        </div>
      </Container>
    </div>
  );
};

export default PagePresentationHeader;
