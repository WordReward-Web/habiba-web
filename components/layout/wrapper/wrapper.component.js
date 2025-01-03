import NavbarComp from "../navbar/navbar.component";
import styles from "./wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <NavbarComp />
        {children}
      </div>
    </>
  );
};

export default Wrapper;
