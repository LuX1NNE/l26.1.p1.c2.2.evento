export default class Cl_mPersona{
    protected _nombre: string;
    protected _apellido: string;
    protected _cedula: number;
    protected _sexo: "M" | "F";
    protected _fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, cedula: number, sexo: "M" | "F", fechaNacimiento: Date){
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
        this._fechaNacimiento = new Date(fechaNacimiento);
    }
    get edad(): number{
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this._fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this._fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }
    set apellido(apellido: string){
        this._apellido = apellido;
    }
    get apellido(): string{
        return this._apellido;
    }
    set cedula(cedula: number){
        this._cedula = cedula;
    }       
    get cedula(): number{
        return this._cedula;
    }
    set sexo(sexo: "F" | "M"){
        this._sexo = sexo;
    }
    get sexo(): "F" | "M"{
        return this._sexo;
    }
}