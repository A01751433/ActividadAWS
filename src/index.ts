import Server from "./provider/Server";
import {PORT,NODE_ENV} from './config';
import express from 'express';
import cors from 'cors';

//Importar controllers
import ProyectoController from "./controllers/ProyectoController";
import LeccionController from "./controllers/LeccionController";
 //Integrar el proyecto

 const server:Server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        ProyectoController.instance,
        LeccionController.instance
    ]
 });
 server.init();