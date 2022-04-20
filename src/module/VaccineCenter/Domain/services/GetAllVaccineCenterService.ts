import { HttpRestApiVaccineCenter } from "../../Infrastructure/HttpRestApiVaccineCenter";
import { VaccineCenter } from "../model/VaccineCenter";

export class GetAllVaccineCenterService {
    public static async execute(): Promise<VaccineCenter[]> {
        return HttpRestApiVaccineCenter.getAll();
    }
}
