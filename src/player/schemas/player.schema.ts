// Define el posible esquema de los datos de la base de datos MongoDB que estamos utilizando.
// En caso de querer utilizar el resto de los metodos, se debe validar este esquema.

import { Schema } from "mongoose";

export const PlayerSchema = new Schema({
    id: Number,
    nickname: String,
    status: String,
    balance: String,
    avatar: String,
});