import {Card} from "@/components/ui/card";
import { delay } from "@/lib/utils";

export default async function Weather() {
  await delay(2000);

  return (
    <Card className="p-4 min-h-80 bg-sky-300">
      <h2>Weather</h2>
      <p>☀️ 35°C</p>
    </Card>
  )
}
