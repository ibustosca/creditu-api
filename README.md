# creditu-api

Este proyecto backend es una API que está desarrollada en Nest.js para buscar jugadores en una base de datos MongoDB.

Puedes utilizar este proyecto con el proyecto de frontend que se encuentra en https://github.com/ibustosca/creditu-players.

Adicionalmente, debes contar con una base de datos en MongoDB que contenta el siguiente esquema:

- Coleccion: players

- Documento:

    + id (number)
    + nickname (string)
    + status (string)
    + balance (string)
    + avatar (string) -> Debe contener una URL hacia alguna foto que tengas almacenada, por ejemplo en Google Drive.


## Instala Node.js
```
https://nodejs.org/es/
```
Al momento de crear este proyecto, fue utilizada la versión 14.17.1 LTS.


## Instala Nest.js
```
npm i -g @nestjs/cli
```
Al momento de crear este proyecto, fue utilizada la versión 7.6.0.


## Instala Mongoose
```
npm i @nestjs/mongoose mongoose
```
Al momento de crear este proyecto, fueron utilizadas las versiones mongoose@5.12.15 y @nestjs/mongoose@7.2.4.


## Crea un archivo .env

En la raíz de tu proyecto crea un nuevo archivo llamado .database.env y dentro de él ingresa los siguientes datos
```
DATABASE_USER=<Escribe aquí el usuario de la base de datos>
DATABASE_PASSWORD=<Escribe aquí la password de la base de datos>
DATABASE_HOST=<Escribe aquí el host o la IP de la base de datos>
DATABASE_DB=<Escribe aquí el nombre de la base de datos>
```

Recuerda quitar los signos <> cuando ingreses los datos correspondientes.

Es importante destacar que en la línea 9 del archivo **app.module.ts** puedes observar los parámetros de la base de datos que estamos utilizando para conectar con la base de datos.

## Para iniciar tu proyecto en desarrollo ejecuta
```
npm run start:dev
```
La API iniciará en **http://localhost:5000**.