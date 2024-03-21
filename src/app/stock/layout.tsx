import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
