const ProductDetails = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2s delay

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      ProductDetails page {params.slug}
    </div>
  );
};

export default ProductDetails;
