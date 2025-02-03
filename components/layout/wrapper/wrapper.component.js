import FooterBottom from "../footer/footerBottom/footerBottom.component";
import FooterTop from "../footer/footerTop/footerTop.component";
import MotivationalMessage from "../motivationalMessage/motivationalMessage.component";
import NavbarComp from "../navbar/navbar.component";
import styles from "./wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <NavbarComp />
        {children}
        <footer className={styles.footerContainer}>
          <MotivationalMessage />
          <div className={styles.footer}>
            <FooterTop />
            <FooterBottom />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Wrapper;
