"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Cart from "../cart/cart.component";
import isResponsive from "@/helpers/isResponsive";
import { useEffect, useState } from "react";

const NavbarComp = ({ navCustomClass }) => {
  const [responsive, setResponsive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(isResponsive(991));
    };
    // Set initial value
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const pathname = usePathname();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`w-100 top-0 ${styles.navbar} ${navCustomClass} ${
        scrolled ? styles.sticky : ""
      }`}
    >
      <Container className="d-flex justify-content-between">
        <Link href="/" passHref className="d-flex align-items-center">
          <Navbar.Brand
            className="position-relative"
            style={{
              width: "70px",
              height: "60px",
              backgroundColor: "var(--main-color)",
              borderRadius: "10PX",
              display: "inline-block",
              margin: 0,
            }}
          >
            <Image src="/logo.svg" alt="Logo" fill={true} />
          </Navbar.Brand>
          <span className={styles.appTitle}>Habiba Farm</span>
        </Link>
        <div className="d-flex gap-1">
          {responsive && <Cart placement={"end"} />}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        {responsive ? (
          <div className={styles.navCollapse}>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className={`${styles.navLinksContainer} d-flex justify-content-center`}
              >
                <Link
                  href="/"
                  passHref
                  className={`${styles.navLink} ${
                    pathname == "/" ? `${styles.active}` : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  passHref
                  className={`${styles.navLink} ${
                    pathname == "/shop" ? `${styles.active}` : ""
                  }`}
                >
                  Shop
                </Link>
                <Link
                  href="/aboutUs"
                  passHref
                  className={`${styles.navLink} ${
                    pathname == "/aboutUs" ? `${styles.active}` : ""
                  }`}
                >
                  About Us
                </Link>
              </Nav>
              <Nav className={styles.actionBtsContainer}>
                {!responsive && <Cart placement={"end"} />}
                {true && (
                  <Link
                    href={{
                      pathname: "/signUp",
                    }}
                    passHref
                  >
                    <Button className={`me-lg-0 ${styles.signUpBtn}`}>
                      sign up
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        ) : (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className={`${styles.navLinksContainer} d-flex justify-content-center`}
            >
              <Link
                href="/"
                passHref
                className={`${styles.navLink} ${
                  pathname == "/" ? `${styles.active}` : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                passHref
                className={`${styles.navLink} ${
                  pathname == "/shop" ? `${styles.active}` : ""
                }`}
              >
                Shop
              </Link>
              <Link
                href="/aboutUs"
                passHref
                className={`${styles.navLink} ${
                  pathname == "/aboutUs" ? `${styles.active}` : ""
                }`}
              >
                About Us
              </Link>
            </Nav>
            <Nav className={styles.actionBtsContainer}>
              {!responsive && <Cart placement={"end"} />}
              {true && (
                <Link
                  href={{
                    pathname: "/signUp",
                  }}
                  passHref
                >
                  <Button className={`me-lg-0 ${styles.signUpBtn}`}>
                    sign up
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
