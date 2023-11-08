import { IUser } from "./user";

export interface IValoration {
    _id: string;
    name: string;
    mark: number;
    participation: boolean;
    user: IUser;
}