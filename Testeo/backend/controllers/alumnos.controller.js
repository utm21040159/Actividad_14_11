import { modelo } from "../models/alumnos.model.js";

modelo.create({
    name:"Andres",
    Edad:21
})

export const test = ()=>{
    console.log("Funciona el controlador")
}
