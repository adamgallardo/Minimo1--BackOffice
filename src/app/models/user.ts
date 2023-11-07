import { IAsignatura } from "./asignatura";

export interface IUser {
    _id: string;
    name: string;
    password: string;
    email: string;
    asignatura?: IAsignatura[];
}