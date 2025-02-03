export const getProducts = async ({ page, search, category_id }) => {
  const data = await fetch(
    `${
      process.env.baseUrl
    }/products/search?page=${page}&search=${search}&category_id=${
      category_id && Number(category_id)
    }`
  );
  const products = await data.json();

  if (!products?.status) {
    throw new Error(`products status: ${products.status}`);
  }

  return products?.data.products;
};
