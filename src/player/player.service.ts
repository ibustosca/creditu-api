//Sericio para compartir metodos
import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Player } from "./interfaces/player.interface";
import { CreatePlayerDTO } from "./dto/player.dto"; //Metodo para adicionar o actualizar jugadores

//Definimos los metodos a utilizar desde los controladores
@Injectable()
export class PlayerService {

    constructor(@InjectModel('Player') private readonly playerModel: Model<Player>) { }

    //Metodo para buscar por id
    async getPlayersbyId(id: number): Promise<Player[]> {
        const playerbyId = await this.playerModel.find({ id: id });
        return playerbyId;
    }

    //Metodo para buscar por coincidencias de nickname y status
    async getPlayersFields(id: string): Promise<Player[]> {
        const playersFields = await this.playerModel.find({ $or: [{ nickname: { $regex: '.*' + id + '.*' } }, { status: { $regex: '.*' + id + '.*' } }] });
        return playersFields;
    }

    //Metodo para creacion de nuevos jugadores
    /* async createPlayer(createPlayerDTO: CreatePlayerDTO): Promise<Player> {
        const player = new this.playerModel(createPlayerDTO);
        await player.save();
        return player;
    } */

    //Metodo para eliminacion de jugadores por Id
    /* async deletePlayer(playerId: string): Promise<Player> {
        const playerEliminado = await this.playerModel.findByIdAndDelete(playerId);
        return playerEliminado;
    } */

    //Metodo para modificacion de jugadores por Id
    /* async updatePlayer(playerId: string, createPlayerDTO: CreatePlayerDTO): Promise<Player> {
        const playerActualizado = await this.playerModel.findByIdAndUpdate(playerId, createPlayerDTO, { new: true }); //Devuelve el objeto nuevo actualizado
        return playerActualizado;
    } */

}
