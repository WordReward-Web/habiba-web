export default async function SignUp() {
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
      SignUp page
    </div>
  );
}
