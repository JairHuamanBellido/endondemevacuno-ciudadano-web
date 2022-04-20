import { useQuery } from "react-query";
import { GetAllVaccineCenterService } from "../../../VaccineCenter/Domain/services/GetAllVaccineCenterService";

export default function useGetAllVaccineCenter() {
    return useQuery("get all vaccine center", () => GetAllVaccineCenterService.execute());
}
