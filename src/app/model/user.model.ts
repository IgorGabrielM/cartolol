import { DefaultModel } from "./default.model"

export class UserModel extends DefaultModel {
    uid?: string;
    email: string;
    password: string;
    name: string;
    imageUrl: string;
    savings: number;
}