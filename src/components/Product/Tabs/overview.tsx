import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {}

export const Overview = (props: Props) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Built in Hard drive</li>
          <li>Wifi enabled</li>
        </ul>
      </CardContent>
    </Card>
  )
}
