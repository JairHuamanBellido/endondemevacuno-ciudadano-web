import { HttpRestApiInflow } from "../../Infrastructure/HttpRestApiInflow";

export class GetInflowByDatesService {
  public static async execute(filter: string, vaccineCenterId: string) {
    if (vaccineCenterId == "")
      return [];

    if (filter === "Hora") {
      const { startDate, endDate } = this.getDatesCurrentHour();
      const inflows = await HttpRestApiInflow.getAll(
        startDate.slice(0, -1),
        endDate.slice(0, -1),
        vaccineCenterId,
        "hour"
      );
      return inflows;
    } else if (filter === "Hoy") {
      const { startDate, endDate } = this.getDatesDayCurrentDay();
      const inflows = await HttpRestApiInflow.getAll(
        startDate.slice(0, -1),
        endDate.slice(0, -1),
        vaccineCenterId,
        "day"
      );
      return inflows;
    } else if (filter === "Semana") {
      const { startDate, endDate } = this.getDatesCurrentWeek();
      const inflows = await HttpRestApiInflow.getAll(
        startDate.slice(0, -1),
        endDate.slice(0, -1),
        vaccineCenterId,
        "week"
      );
      return inflows;
    } else if (filter === "Mes") {
      const { startDate, endDate } = this.getDatesCurrentMonth();
      const inflows = await HttpRestApiInflow.getAll(
        startDate.slice(0, -1),
        endDate.slice(0, -1),
        vaccineCenterId,
        "month"
      );
      return inflows;
    }
  }

  private static standardizeTimeToPeru(date: Date) {
    date.setHours(date.getHours() - 5);
  }
  private static getDatesCurrentWeek() {
    let startDate: string = "";
    let endDate: string = "";
    const DAY = new Date().getDate();
    const MONTH = new Date().getMonth();

    const numberDay = new Date(2022, MONTH, DAY).getUTCDay();

    const prevDays = [];
    const afterDays = [];

    // Validate is sunday Domingo
    if (numberDay === 0) {
      for (let i = 6; i > 0; i--) {
        const currentDate = new Date(2022, MONTH, DAY);
        currentDate.setDate(currentDate.getDate() - i);
        this.standardizeTimeToPeru(currentDate);
        prevDays.push(currentDate);
      }

      const currentDate = new Date(2022, MONTH, DAY);
      currentDate.setHours(23);
      currentDate.setMinutes(59);
      this.standardizeTimeToPeru(currentDate);
      startDate = prevDays[0].toISOString();
      endDate = currentDate.toISOString();
    } else {
      for (let i = numberDay - 1; i > numberDay - 2; i--) {
        const currentDate = new Date(2022, MONTH, DAY);
        currentDate.setDate(currentDate.getDate() - i);
        prevDays.push(currentDate);
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        this.standardizeTimeToPeru(currentDate);
        startDate = currentDate.toISOString();
      }

      for (let i = 0; i <= 7 - numberDay; i++) {
        const currentDate = new Date(2022, MONTH, DAY);
        currentDate.setDate(currentDate.getDate() + i);
        currentDate.setHours(23);
        currentDate.setMinutes(59);
        this.standardizeTimeToPeru(currentDate);
        afterDays.push(currentDate);
      }

      endDate = afterDays[afterDays.length - 1].toISOString();
    }

    return { startDate, endDate };
  }

  private static getDatesCurrentHour() {
    let startDate = "";
    let endDate = "";

    const currentDate = new Date();
    this.standardizeTimeToPeru(currentDate);

    endDate = currentDate.toISOString();
    currentDate.setHours(currentDate.getHours() - 1);
    startDate = currentDate.toISOString();
    return { startDate, endDate };
  }

  private static getDatesDayCurrentDay() {
    let startDate = "";
    let endDate = "";
    const currentDate = new Date();

    currentDate.setHours(0);
    currentDate.setMinutes(0);
    this.standardizeTimeToPeru(currentDate);

    startDate = currentDate.toISOString();

    currentDate.setUTCHours(23);
    currentDate.setUTCMinutes(59);

    endDate = currentDate.toISOString();

    return { startDate, endDate };
  }

  private static getDatesCurrentMonth() {
    let startDate = "";
    let endDate = "";
    const currentDate = new Date();
    this.standardizeTimeToPeru(currentDate);
    const totalDaysInMonth = new Date(
      2022,
      currentDate.getMonth() + 1,
      0
    ).getDate();
    currentDate.setUTCDate(1);
    currentDate.setUTCHours(0);
    currentDate.setUTCMinutes(0);

    startDate = currentDate.toISOString();

    currentDate.setUTCDate(totalDaysInMonth);
    currentDate.setUTCHours(23);
    currentDate.setUTCMinutes(59);
    endDate = currentDate.toISOString();
    return { startDate, endDate };
  }
}
