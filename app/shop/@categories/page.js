import { getCategories } from "@/helpers/APIs/getCategories";
import styles from "./Categories.module.css";
import CategoriesAccordion from "@/components/shop/categoriesAccordion/categoriesAccordion.component";
export default async function Categories(props) {
  const categories = await getCategories();
  console.log("categories", categories?.data?.categories);

  return <CategoriesAccordion categories={categories?.data?.categories} />;
}
