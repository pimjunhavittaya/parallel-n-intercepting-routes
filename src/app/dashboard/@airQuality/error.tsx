'use client';

import {Card} from "@/components/ui/card"

export default function AirQualityError() {
  return (
    <Card className="p-4 min-h-80 bg-gray-300 flex flex-col">
      <h2>Air Quality</h2>
      <div className="flex flex-grow items-center justify-center">
        N/A
      </div>
    </Card>
  )
}
