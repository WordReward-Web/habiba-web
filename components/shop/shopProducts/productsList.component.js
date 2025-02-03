import { getProducts } from "@/helpers/APIs/getProducts";
import ProductCardGrid from "../../general/productCardGrid/productCardGrid.component";
import ResponsivePagination from "../../general/responsivePagination/responsivePagination.component";
import NoProductPlaceholder from "@/components/general/noProductPlaceholder/noProductPlaceholder.component";

const ProductsList = async ({ props }) => {
  const searchParams = await props.searchParams;
  const page = searchParams?.page || 1;
  const search = searchParams?.search || "";
  const category_id = searchParams?.category_id || "";

  const products = await getProducts({ page, search, category_id });

  return (
    <>
      {products?.data && products?.data?.length > 0 ? (
        products?.data?.map((product, index) => {
          return (
            <div className="col-md-4 col-12 col-sm-6" key={product.id}>
              <ProductCardGrid product={product} />
            </div>
          );
        })
      ) : (
        <NoProductPlaceholder text={"no products added yet"} />
      )}
      {products?.per_page < products?.total && (
        <ResponsivePagination
          totalItems={products?.total}
          itemsPerPage={products?.per_page}
        />
      )}
    </>
  );
};

export default ProductsList;
