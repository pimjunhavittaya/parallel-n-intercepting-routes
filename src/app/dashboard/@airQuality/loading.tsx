import {Skeleton} from '@/components/ui/skeleton';

export default function AirQualityLoading() {
  return (
    <Skeleton className="min-h-80 bg-violet-200 text-gray-400 flex items-center justify-center">
      loading...
    </Skeleton>
  )
}
