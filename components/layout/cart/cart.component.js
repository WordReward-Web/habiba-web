import { Button, Container, Offcanvas } from "react-bootstrap";
import styles from "./Cart.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCartContentAction,
  showCartContentAction,
} from "@/Redux/slices/canvasSlice";

const Cart = ({ name, customClases, children, ...props }) => {
  const dispatch = useDispatch();
  const { showCartContent } = useSelector((state) => state.canvas);

  const handleShow = () => dispatch(showCartContentAction());
  const handleClose = () => dispatch(closeCartContentAction());

  return (
    <div className={`${styles.Cart}`}>
      <Button className={`${styles.cartBtn}`} onClick={handleShow}>
        <i>
          <HiOutlineShoppingCart />{" "}
        </i>
        <span className={styles.cart_count}>{"1"}</span>
      </Button>
      <Offcanvas
        className={styles.sideOffcanvas}
        show={showCartContent}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <div className="title">
            <i className="fs-4">
              <HiOutlineShoppingCart />
            </i>
            <span className={styles.titleTxt}>Shopping Cart</span>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <Container>CartContent</Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
