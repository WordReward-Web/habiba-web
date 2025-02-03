import { HiOutlineShoppingCart } from "react-icons/hi";

const NoProductPlaceholder = ({ text }) => {
  return (
    <div className={`py-5 text-center d-flex flex-column fw-bold fs-4`}>
      <i className="fs-1">
        <HiOutlineShoppingCart />
      </i>
      <span>{text}</span>
    </div>
  );
};

export default NoProductPlaceholder;
