import {Skeleton} from "@/components/ui/skeleton";

export default function WeatherLoading() {
  return (
    <Skeleton className="min-h-80 bg-sky-200 text-gray-400 flex items-center justify-center">
      loading...
    </Skeleton>
  )
}
