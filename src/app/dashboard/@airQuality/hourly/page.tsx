import {Card} from "@/components/ui/card";
import {delay} from '@/lib/utils';

export default async function AirQualityHourly() {
  await delay(1000);
  // throw new Error();

  return (
    <Card className="p-4 min-h-80 bg-violet-300">
      <h2>Air Quality</h2>
      <h3><small>24H Forecast</small></h3>
    </Card>
  )
}
