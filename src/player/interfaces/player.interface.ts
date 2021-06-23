// Detalla los campos que se manejaran dentro del codigo
import { Document } from "mongoose";

export interface Player extends Document {
    id: number;
    nickname: string;
    status: string;
    balance: string;
    avatar: string;
}