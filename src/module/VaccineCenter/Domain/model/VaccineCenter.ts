

export interface VaccineCenter {
    id: string;
    name: string;
    direction: string;
    district: string;
    localization: string;
    affluenceLevel: string;
    businessHour: string;
    vaccines: string[];
}

export interface Vaccine {
    name: string;
    quantity: number;
}