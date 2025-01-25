import styles from "./FooterTop.module.css";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

const FooterTop = () => {
  return (
    <div className="footerTop">
      <Container className="py-3">
        <div className={`row ${styles.row}`}>
          <div className={`col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3`}>
            <div className={`${styles.about}`}>
              <Link className="d-flex align-items-center" href="/" passHref>
                <div
                  className="position-relative logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--main-color)",
                    borderRadius: "10PX",
                  }}
                >
                  <Image src="/logo.svg" alt="Logo" fill={true} />
                </div>
                <span className={styles.appTitle}>Habiba Farm</span>
              </Link>
              <div className={styles.contactWays}>
                <div className="d-flex align-content-center mb-2 gap-2">
                  <div className={styles.contactIcon}>
                    <FiMapPin />
                  </div>
                  <div className={styles.contactDetail}>
                    Nuweiba, Nuweiba`, Egypt
                  </div>
                </div>
                <div className="d-flex align-content-center mb-2 gap-2">
                  <div className={styles.contactIcon}>
                    <CiMail />
                  </div>
                  <div className={styles.contactDetail}>nuweiba@gmail.com</div>
                </div>
                <div className="d-flex align-content-center gap-2">
                  <div className={styles.contactIcon}>
                    <MdOutlineLocalPhone />
                  </div>
                  <div className={styles.contactDetail}>0123456789</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 mb-3`}>
            <div className="importantLinks">
              <div className={styles.sectionTitle}>My Account</div>
              <Link
                className={`${styles.link} mb-2`}
                href="/myProfile"
                passHref
              >
                My Account
              </Link>
              <Link className={styles.link} href="/myOrder" passHref>
                Order History
              </Link>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 mb-3`}>
            <div className="importantLinks">
              <div className={styles.sectionTitle}>Help</div>
              <Link className={`${styles.link} mb-2`} href="/aboutUs" passHref>
                About Us
              </Link>
              <Link className={styles.link} href="/policy" passHref>
                Privacy & Policy
              </Link>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3`}>
            <div className="importantLinks">
              <div className={styles.sectionTitle}>Download Mobile App</div>
              <div className={`${styles.mobileApp}`}>
                <Link
                  className={`${styles.link} mb-2`}
                  target="_blank"
                  href="https://www.instagram.com/habibaorganicfarm?igsh=ZHVuYjhod2JqdTI3"
                >
                  <div className={styles.mobileAppItem}>
                    <div
                      className={`position-relative ${styles.appsIcon}`}
                      style={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "var(--main-color)",
                        borderRadius: "10PX",
                      }}
                    >
                      <Image
                        src="/androidIcon.svg"
                        alt="androidIcon"
                        fill={true}
                      />
                    </div>
                    <div className={styles.appsContent}>
                      <span>Download on</span>
                      <span>Play Store</span>
                    </div>
                  </div>
                </Link>
                <Link
                  className={`${styles.link} mb-2`}
                  target="_blank"
                  href="https://www.instagram.com/habibaorganicfarm?igsh=ZHVuYjhod2JqdTI3"
                >
                  <div className={styles.mobileAppItem}>
                    <div
                      className={`position-relative ${styles.appsIcon}`}
                      style={{
                        width: "25px",
                        height: "25px",
                        backgroundColor: "var(--main-color)",
                        borderRadius: "10PX",
                      }}
                    >
                      <Image src="/appleIcon.svg" alt="appleIcon" fill={true} />
                    </div>
                    <div className={styles.appsContent}>
                      <span>Download on</span>
                      <span> App Store</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
