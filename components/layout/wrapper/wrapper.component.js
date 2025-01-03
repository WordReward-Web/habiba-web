import styles from "./wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className={styles.pageWrapper}>{children}</div>
    </>
  );
};

export default Wrapper;
