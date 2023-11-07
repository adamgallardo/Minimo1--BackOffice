import { ISchedule } from "./schedule";

export interface IAsignatura {
    _id: string;
    name: string;
    schedule?: ISchedule[];
}