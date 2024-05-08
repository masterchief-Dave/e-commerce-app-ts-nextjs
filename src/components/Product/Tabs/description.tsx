import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  data: string
}

export const Description = (props: Props) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent>
        {props.data.split(/\r?\n/).map((text, index) => {
          return (
            <p key={index} className="py-2">
              {text}
            </p>
          )
        })}
      </CardContent>
    </Card>
  )
}
