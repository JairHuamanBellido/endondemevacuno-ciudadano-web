import { HttpRestApiMock } from "../../../core/api/HttpRestApi";
import { InflowByPeriod } from "../Domain/model/InflowByPeriod";

export type Period = "hour" | "day" | "week" | "month";
export class HttpRestApiInflow {
  public static async getAll(
    startDate: string,
    endDate: string,
    vaccineCenterId: string,
    period: Period
  ): Promise<InflowByPeriod[]> {
    const { data } = await HttpRestApiMock.get<InflowByPeriod[]>(
      "/inflow",
      {
        params: {
          startDate,
          endDate,
          vaccineCenterId,
          period,
        },
      }
    );
    return data;
  }
}
