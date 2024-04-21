import {Card} from "@/components/ui/card";
import {delay} from '@/lib/utils';

export const dynamic = 'force-dynamic'

export default async function WeatherHourly() {
  await delay(1000);

  return (
    <Card className="p-4 min-h-80 bg-sky-300">
      <h2>Weather</h2>
      <ul className="mt-2">
        <li>
          <div className="w-[80px] inline-block">MON <small>4/21</small></div> - ☀️ 39°C / 28°C
        </li>
        <li>
          <div className="w-[80px] inline-block">TUE <small>4/22</small></div> - ☀️ 40°C / 28°C
        </li>
        <li>
          <div className="w-[80px] inline-block">WED <small>4/23</small></div> - 🌧️ 39°C / 28°C
        </li>
      </ul>
    </Card>
  )
}
