import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  average: number;
  min: number;
  max: number;
};

export default function MetricsCards({
  title,
  average,
  min,
  max,
}: Props) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Average</p>
          <p className="text-xl font-semibold">
            {average.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Min</p>
          <p className="text-xl font-semibold">{min}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Max</p>
          <p className="text-xl font-semibold">{max}</p>
        </div>
      </CardContent>
    </Card>
  );
}
