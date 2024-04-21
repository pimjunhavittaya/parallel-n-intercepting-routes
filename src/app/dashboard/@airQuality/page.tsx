import {Card} from "@/components/ui/card";
import {delay} from '@/lib/utils';

export default async function AirQuality() {
  await delay(500);

  // throw new Error('Failed to fetch air quality data');

  return (
    <Card className="p-4 min-h-80 bg-violet-300">
      <h2>Air Quality</h2>
      <div className="my-4 flex flex-col gap-2">
        <div className="w-20 h-1 bg-yellow-300"/>
        <div>AQI 97</div>
      </div>
    </Card>
  )
}
