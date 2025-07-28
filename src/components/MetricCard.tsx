import { Card, CardContent } from "@/components/ui/card"

type Props = { title: string; value: string; delta: string }

export default function MetricCard({ title, value, delta }: Props) {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition">
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-sm ${delta.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
          {delta}
        </div>
      </CardContent>
    </Card>
  )
}

