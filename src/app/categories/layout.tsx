const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <h2>Categories</h2>
      <div>{children}</div>
    </>
  );
};

export default page;
