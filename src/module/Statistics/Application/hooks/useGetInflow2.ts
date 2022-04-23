import { useQuery } from "react-query";
import { GetInflowByDatesService } from "../../Domain/services/GetInflowByDatesService";

export default function useGetInflow2(filter: string, vaccineCenterId: string) {
    return useQuery("Get inflow2", () => GetInflowByDatesService.execute(filter, vaccineCenterId));
}