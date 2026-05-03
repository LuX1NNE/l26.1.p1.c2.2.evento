import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEntrada extends Cl_mPersona{
    _tipoEntrada: "regular" | "vip";
    _estudiante: "si" | "no";
    

    constructor({tipoEntrada, nombre, apellido, cedula, sexo, fechaNacimiento, estudiante}:
        {tipoEntrada: "regular" | "vip", nombre: string, apellido: string, cedula: number, sexo: "F" | "M", fechaNacimiento: Date, estudiante: "si" | "no"}){
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._tipoEntrada = tipoEntrada;
        this._estudiante = estudiante;
    }
    precioBase(): number{
        switch (this.tipoEntrada){
            case "vip":
                if(this.sexo === "F")
                    return 25;
                else
                    return 30;
            case "regular":
                return 10;
        }
    }
    descuento(): number{
        if (this.estudiante === "si" && this.edad < 18){
            return 5;
        }
        else return 0;
    }
    precio(): number{
        return this.precioBase() - this.descuento();
    }
    set tipoEntrada(tipoEntrada: "regular" | "vip"){
        this._tipoEntrada = tipoEntrada;
    }
    get tipoEntrada(): "regular" | "vip"{
        return this._tipoEntrada;
    }
    set estudiante(estudiante: "si" | "no"){
        this._estudiante = estudiante;
    }
    get estudiante(): "si" | "no"{
        return this._estudiante;
    }
}