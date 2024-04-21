import MainNav from '@/components/MainNav';
import {ReactNode} from 'react';
import DashboardNav from '@/app/dashboard/components/DashboardNav';

export default function DashboardLayout(
  {
    airQuality,
    notice,
    weather,
    modal
  }: Readonly<{
    // children: ReactNode;
    airQuality: ReactNode;
    notice: ReactNode;
    weather: ReactNode;
    modal: ReactNode;
  }>
) {
  return (
    <>
      <h1 className="text-xl">Dashboard</h1>
      <DashboardNav/>

      {modal}

      {/*{children}*/}

      <main className="my-4 grid grid-cols-1 gap-4">
        {notice}

        <div className="grid grid-cols-[1fr_1fr] gap-4">
          <section>{weather}</section>
          <section>{airQuality}</section>
        </div>
      </main>

    </>
  )
}
