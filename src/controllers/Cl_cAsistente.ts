import { I_vAsistente } from "../interfaces/I_vAsistente.js";
import Cl_mAsistente from "../models/Cl_mAsistente.js";

export default class Cl_cAsistente{
    private vista: I_vAsistente;
    private callback!: (asistente: Cl_mAsistente | null) => void;
     constructor(vista: I_vAsistente){
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarAsistente(callback: (asistente: Cl_mAsistente | null) => void): void{
        this.callback = callback;
        this.vista.mostrar();
    }
    private btCancelarOnClick(): void{
        this.callback(null);
        this.vista.ocultar();
    }
    private btAceptarOnClick(): void{
        let asistente;
        let datos = {
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNacimiento: this.vista.fechaNacimiento,
            tipoEntrada: this.vista.tipoEntrada,
            estudiante: this.vista.estudiante
        }
        asistente = new Cl_mAsistente(datos);
        this.callback(asistente);
        this.vista.ocultar();
    }
}