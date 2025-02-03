import styles from "./ProductCardGrid.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ProductCardGrid = ({ product }) => {
  console.log("ddddddddd", product);

  return (
    <Link href={`/productDetails/${product?.id}`} passHref>
      <div
        className={`${styles.product} ${
          product?.stock == 0 && styles.outOfStock
        } mb-sm-4 mb-lg-0`}
      >
        <div className={styles.productImg}>
          <div className={`position-relative ${styles.imageContainer}`}>
            <Image
              src={`${product.images[0].file_path}`}
              alt="product_img"
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTitle}>
            <h6>{product?.name}</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="content">
              <div className={styles.price}>
                {product?.price_before > product?.price_after ? (
                  <>
                    <div className="priceBefor">{`EGP ${product?.price_before}`}</div>
                    <div
                      className={`priceAfter ${styles.discount}`}
                    >{`EGP ${product?.price_after}`}</div>
                  </>
                ) : (
                  <div className="priceAfter">{`EGP ${product?.price_after}`}</div>
                )}
              </div>
              <div className={styles.unit}>{product?.unit?.name_en}</div>
            </div>
            <Button className={styles.addToCart} disabled={product?.stock == 0}>
              <HiOutlineShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardGrid;
