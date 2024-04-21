import {Card} from "@/components/ui/card";
import { delay } from "@/lib/utils";

export default async function WeatherDaily() {
  await delay(1000);

  return (
    <Card className="p-4 min-h-80 bg-sky-300">
      <h2>Weather</h2>
      <ul className="mt-2">
        <li>2PM - ☀️ 35°C</li>
        <li>3PM - ☁️ 33°C</li>
        <li>4PM - 🌧️ 32°C</li>
      </ul>
    </Card>
  )
}
