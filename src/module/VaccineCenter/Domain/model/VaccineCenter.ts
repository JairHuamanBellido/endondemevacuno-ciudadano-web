

export interface VaccineCenter {
    id: string;
    name: string;
    direction: string;
    district: string;
    localization: string;
    influx: string;
    vaccines: Vaccine[];
}

export interface Vaccine {
    name: string;
    quantity: number;
}