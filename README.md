# creditu-api

Este proyecto backend es una API que está desarrollada en Nest.js para buscar jugadores en una base de datos MongoDB.

![nestjsmongo](https://user-images.githubusercontent.com/64162717/123560593-38d9b480-d771-11eb-8a1f-7b194fd71db3.png)

Este proyecto se ejecuta en conjunto al proyecto frontend que se encuentra en https://github.com/ibustosca/creditu-players. Por lo que te sugiero también descargarlo e implementarlo en tu ambiente.

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

## Instala las dependencias del proyecto
```
npm install
```

## Dependencias

Para tu información, en este proyecto utilizamos las siguientes dependencias adicionales:

- nestjs/cli, version 7.6.0
- nestjs/mongoose, version 7.2.4
- mongoose, version 5.12.15
 
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

## Invocación de la API

Puedes invocar la API a través de un método GET tal como muestra la siguiente URL:

- http://localhost:5000/player/search/1

El valor numérico 1 devolverá a un jugador exacto, pero también puedes reemplazarlo por texto coincidente a los campos "nickname" y "status". Por ejemplo:

- http://localhost:5000/player/search/asdd

## Opcional

En caso de que quieras subir tu proyecto a una plataforma en linea como **Heroku**, te sugiero cambiar la línea 7 del archivo **main.ts** por la siguiente:
```
await app.listen(process.env.PORT || 8080);
```
