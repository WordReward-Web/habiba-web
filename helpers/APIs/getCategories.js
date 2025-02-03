export const getCategories = async () => {
  const data = await fetch(`${process.env.baseUrl}/categories`);
  const categories = await data.json();

  if (!categories?.status) {
    throw new Error(`categories status: ${categories.status}`);
  }

  return categories;
};
