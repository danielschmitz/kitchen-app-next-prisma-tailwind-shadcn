import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default page;
