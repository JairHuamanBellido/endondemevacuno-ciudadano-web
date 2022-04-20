import type { NextPage } from 'next'
import { useState } from 'react';
import SearchVaccineCenterContainer from '../src/module/SearchVaccineCenter/Application/components/Main';
import useGetAllVaccineCenter from '../src/module/SearchVaccineCenter/Application/hooks/useGetAllVaccineCenter';
import GoogleMap from '../src/shared/map/Map';
import TopBar from '../src/shared/topbar/TopBar';

const CVs = [
  {
    id: 1,
    name: "Polideportivo San Miguel",
    distric: "San Miguel",
    direction: "Av. Bertolotto 760, San Miguel 15086",
    location: "-11.757189148896508, -76.29740353744606",
    influx: "baja",
    vaccines: [
      { name: "Hepatitis A", quantity: 12 },
      { name: "Pfizer", quantity: 500 },
      { name: "AstraZeneca", quantity: 1500 },
    ]
  },
  {
    id: 2,
    name: "Polideportivo San Juan de Miraflores",
    distric: "San Juan de Miraflores",
    direction: "Plaza Independencia, Callao 07021",
    location: "-12.163513103408222,-76.97230952925827",
    influx: "alta",
    vaccines: [
      { name: "Hepatitis A", quantity: 12 },
      { name: "Pfizer", quantity: 500 },
      { name: "AstraZeneca", quantity: 1500 },
    ]
  },
  {
    id: 3,
    name: "Polideportivo Villa el Salvador",
    distric: "Villa el Salvador",
    influx: "media",
    direction: "Plaza Independencia, Callao 07021",
    location: "-12.199421379594996,-76.95798533110404",
    vaccines: [
      { name: "Hepatitis A", quantity: 12 },
      { name: "Pfizer", quantity: 500 },
      { name: "AstraZeneca", quantity: 1500 },
    ]
  },
  {
    id: 4,
    name: "Campo de Marte",
    distric: "Breña",
    influx: "baja",
    direction: "Plaza Independencia, Callao 07021",
    location: "-12.068236765975461,-77.04139573110548",
    vaccines: [
      { name: "Hepatitis A", quantity: 12 },
      { name: "AstraZeneca", quantity: 1500 },
    ]
  },
  {
    id: 5,
    name: "Videna",
    distric: "La Victoria",
    influx: "alta",
    direction: "Plaza Independencia, Callao 07021",
    location: "-12.081171323270329,-77.0018702445998",
    vaccines: [
      { name: "Hepatitis A", quantity: 12 },
      { name: "Pfizer", quantity: 500 },
    ]
  },
  {
    id: 6,
    name: "Castillo Real Felipe",
    distric: "Callao",
    influx: "media",
    direction: "Plaza Independencia, Callao 07021",
    location: "-12.062330228323855,-77.14875981576485",
    vaccines: [
      { name: "Pfizer", quantity: 500 },
      { name: "AstraZeneca", quantity: 1500 },
    ]
  },
]


const Home: NextPage = () => {
  const { data: allCV } = useGetAllVaccineCenter();
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
      <TopBar />
      <div className="flex w-full h-full">
        <SearchVaccineCenterContainer selectVaccineCenterToMap={setSelected} vaccineCenters={allCV ?? []} />
        <main className="h-full w-full">
          {<GoogleMap selected={selected} locations={getLocations()} />}
        </main>
      </div>
    </div>
  )
}

export default Home
