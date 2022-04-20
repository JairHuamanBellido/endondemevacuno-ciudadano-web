import type { NextApiRequest, NextApiResponse } from 'next'

const CVs = [
    {
        id: "1",
        name: "Polideportivo San Miguel",
        district: "San Miguel",
        influx: "alta",
        direction: "Av. Bertolotto 760, San Miguel 15086",
        localization: "-11.757189148896508, -76.29740353744606",
        vaccines: [
            { name: "Hepatitis A", quantity: 12 },
            { name: "Pfizer", quantity: 500 },
            { name: "AstraZeneca", quantity: 1500 },
        ]
    },
    {
        id: "2",
        name: "Polideportivo San Juan de Miraflores",
        district: "San Juan de Miraflores",
        influx: "media",
        direction: "Plaza Independencia, Callao 07021",
        localization: "-12.163513103408222,-76.97230952925827",
        vaccines: [
            { name: "Hepatitis A", quantity: 12 },
            { name: "Pfizer", quantity: 500 },
            { name: "AstraZeneca", quantity: 1500 },
        ]
    },
    {
        id: "3",
        name: "Polideportivo Villa el Salvador",
        district: "Villa el Salvador",
        influx: "baja",
        direction: "Plaza Independencia, Callao 07021",
        localization: "-12.199421379594996,-76.95798533110404",
        vaccines: [
            { name: "Hepatitis A", quantity: 12 },
            { name: "Pfizer", quantity: 500 },
            { name: "AstraZeneca", quantity: 1500 },
        ]
    },
    {
        id: "4",
        name: "Campo de Marte",
        district: "Breña",
        influx: "alta",
        direction: "Plaza Independencia, Callao 07021",
        localization: "-12.068236765975461,-77.04139573110548",
        vaccines: [
            { name: "Hepatitis A", quantity: 12 },
            { name: "AstraZeneca", quantity: 1500 },
        ]
    },
    {
        id: "5",
        name: "Videna",
        district: "La Victoria",
        influx: "media",
        direction: "Plaza Independencia, Callao 07021",
        localization: "-12.081171323270329,-77.0018702445998",
        vaccines: [
            { name: "Hepatitis A", quantity: 12 },
            { name: "Pfizer", quantity: 500 },
        ]
    },
    {
        id: "6",
        name: "Castillo Real Felipe",
        district: "Callao",
        influx: "baja",
        direction: "Plaza Independencia, Callao 07021",
        localization: "-12.062330228323855,-77.14875981576485",
        vaccines: [
            { name: "Pfizer", quantity: 500 },
            { name: "AstraZeneca", quantity: 1500 },
        ]
    },
]

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.status(200).json(CVs)
}
