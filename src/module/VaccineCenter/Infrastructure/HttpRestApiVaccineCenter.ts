import { HttpRestApi } from "../../../core/api/HttpRestApi";
import { VaccineCenter } from "../Domain/model/VaccineCenter";

export class HttpRestApiVaccineCenter {
    public static async getAll(): Promise<VaccineCenter[]> {
        const { data } = await HttpRestApi.get<VaccineCenter[]>("/vaccine-center");
        return data;
    }
}
