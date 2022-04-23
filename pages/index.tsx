import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import SearchVaccineCenterContainer from '../src/module/SearchVaccineCenter/Application/components/Main';
import useGetAllVaccineCenter from '../src/module/SearchVaccineCenter/Application/hooks/useGetAllVaccineCenter';
import { Spinner } from '../src/shared';
import GoogleMap from '../src/shared/map/Map';
import TopBar from '../src/shared/topbar/TopBar';


const Home: NextPage = () => {
  const { data: allCV, isLoading } = useGetAllVaccineCenter();
  const [selected, setSelected] = useState("")

  const getLocations = () => {
    if (!allCV)
      return [];

    return allCV.map(data => {
      return {
        "id": data.id,
        "location": {
          "lat": data.localization.split(',')[0],
          "lng": data.localization.split(',')[1],
        }
      }
    });
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <Head>
        <title>En Donde Me Vacuno</title>
        <meta name="description" content="En donde me vacuno" />{" "}
      </Head>
      <TopBar />
      <div className="flex w-full h-full relative overflow-hidden">
        <SearchVaccineCenterContainer selectVaccineCenterToMap={setSelected} vaccineCenters={allCV ?? []} isLoading={isLoading} />
        <main className="h-full w-full">
          {<GoogleMap selected={selected} locations={getLocations()} />}
        </main>
      </div>
    </div>
  )
}

export default Home
