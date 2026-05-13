import { modelOptions,prop,getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection:'lecciones',
        timestamps:false //agregar dos atributos createAt y updateAt

    }
})

export class Leccion{
    @prop({required:true,trim:true})
    public orden!:number;
    @prop({required:true,trim:true})
    public contenido_url!:string;
    @prop({required:true,trim:true})
    public tipo_archivo!:string
}
export const LeccionModel = getModelForClass(Leccion);