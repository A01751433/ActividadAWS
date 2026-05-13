import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import { LeccionModel } from "../modelsNOSQL/Leccion";

export default class LeccionController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance:LeccionController;
    //Métodos de clase
    public static get instance():LeccionController{
        return this._instance ||
        (this._instance = new this("Leccion"));
    }
    //Metodo de instancia
    protected initRoutes(): void {
        this.router.get('/listarLecciones',
            this.getListarLecciones.bind(this));
        this.router.post('/crearLeccion',
            this.postCrearLeccion.bind(this));
    }

    private async getListarLecciones(req:Request,res:Response):Promise<void>{
        //SELECT
        try {
            const lecciones = await LeccionModel.find().sort({createdAt:-1});
            res.status(200).json(lecciones);
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    }

    private async postCrearLeccion(req:Request,res:Response):Promise<void>{
        //CREATE
        try {
            console.log(req.body);
            await LeccionModel.create(req.body);
            res.status(200).json({message:"Registro de proyecto exitoso"});
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    }

}