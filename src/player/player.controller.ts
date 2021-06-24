import { Controller, Get, Post, Delete, Put, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreatePlayerDTO } from "./dto/player.dto";
import { PlayerService } from "./player.service";

@Controller('player')
export class PlayerController {

    constructor(private playerService: PlayerService) { } //Acceso solo a esta clase

    //Metodo GET para buscar por cualquier coincidencia y si la busqueda es exacta por id, solo devuelve el jugador exacto.
    @Get('/search/:id')
    async getPlayerbyAny(@Res() res, @Param('id') id) {
        //Si id es numerico, ejecuta el metodo 'getPlayersbyId'
        if (Math.floor(Number(id))) {
            const player = await this.playerService.getPlayersbyId(id);
            return res.status(HttpStatus.OK).json(player);
        } else {
            //Ejecuta el metodo 'getPlayersFields'
            const players = await this.playerService.getPlayersFields(id);
            return res.status(HttpStatus.OK).json(players);
        }
    }

    //Metodo GET para buscar todos los jugadores
    /* @Get('/search')
    async getPlayers(@Res() res) {
        const players = await this.playerService.getPlayers();
        return res.status(HttpStatus.OK).json({
            message: 'ok',
            player: players
        });
    } */

    //Metodo GET para buscar jugadores por id
    /* @Get('/search/id/:id')
    async getPlayerbyId(@Res() res, @Param('id') id: number) {
        const player = await this.playerService.getPlayersbyId(id);
        if (!player) throw new NotFoundException('Jugador no existe');
        return res.status(HttpStatus.OK).json(player);
    } */

    //Metodo GET para buscar jugadores por _id
    /* @Get('/search/:playerId')
    async getPlayer(@Res() res, @Param('playerId') playerId) {
        const player = await this.playerService.getPlayer(playerId);
        if (!player) throw new NotFoundException('Jugador no existe');
        return res.status(HttpStatus.OK).json(player);
    } */

    //Metodo GET para buscar jugadores por nickname
    /* @Get('/nickname/:nickname')
    async getPlayerbyIdPlayer(@Res() res, @Param('nickname') id: string) {
        const player = await this.playerService.getPlayersbyNickname(id);
        if (!player) throw new NotFoundException('Jugador no existe');
        return res.status(HttpStatus.OK).json(player);
    } */

    // Metodo POST de ejemplo para crear jugadores
    /* @Post('/create')
    async createPlayer(@Res() res, @Body() createPlayerDTO: CreatePlayerDTO) {
        const player = await this.playerService.createPlayer(createPlayerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'El jugador ha sido creado',
            player: player
        });
    } */

    //Metodo DELETE de ejemplo para eliminar jugadores por Id
    /* @Delete('/delete')
    async deletePlayer(@Res() res, @Query('playerId') playerId) {
        const player = await this.playerService.deletePlayer(playerId);
        if (!player) throw new NotFoundException('Jugador no existe');
        return res.status(HttpStatus.OK).json({
            message: 'El jugador fue eliminado',
            playerDeleted: player
        });
    } */

    //Metodo PUT de ejemplo para actualizar jugadores por Id
    /* @Put('/update')
    async updatePlayer(@Res() res, @Body() createPlayerDTO: CreatePlayerDTO, @Query('playerId') playerId) {
        const player = await this.playerService.updatePlayer(playerId, createPlayerDTO);
        if (!player) throw new NotFoundException('Jugador no existe');
        return res.status(HttpStatus.OK).json({
            message: 'El jugador ha sido modificado',
            player: player
        });
    } */

}
