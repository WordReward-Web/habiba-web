import ProductsList from "@/components/shop/shopProducts/productsList.component";
import { Suspense } from "react";

export default async function Products(props) {
  const searchParams = await props.searchParams;
  const page = searchParams?.page || 1;
  const search = searchParams?.search || "";
  return (
    <Suspense key={`${search}-${page}`} fallback={"loading .........."}>
      <ProductsList props={props} />
    </Suspense>
  );
}
