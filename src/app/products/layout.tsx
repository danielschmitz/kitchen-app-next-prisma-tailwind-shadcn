import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default page;
