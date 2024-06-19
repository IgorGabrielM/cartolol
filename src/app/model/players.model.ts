import { DefaultModel } from "./default.model"
import { TeamModel } from "./team.model";

export class PlayersModel extends DefaultModel {
    name: string;
    price: number;
    points: number;
    imageUrl: string;
    team?: TeamModel
    teamId?: string;
    position?: string;
    priceHistory?: number[];
    pointsHistory?: number[];
}