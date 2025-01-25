import Link from "next/link";
import styles from "./FooterBottom.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerBootom}>
      <div className={styles.follow}>Follow Us</div>
      <div className={styles.socialLinks}>
        <Link
          target="_blank"
          href="https://www.facebook.com/share/vJXYJJGxk3Gatedb/?mibextid=wwXIfr"
          className={styles.socialLink}
        >
          <FaFacebook />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/habibaorganicfarm?igsh=ZHVuYjhod2JqdTI3"
          className={styles.socialLink}
        >
          <FaInstagram />
        </Link>
      </div>
      <div className="container d-flex justify-content-center">
        <p className={`m-0 ${styles.copyright}`}>
          Terms & Conditions Privacy Habiba @ {currentYear}
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
