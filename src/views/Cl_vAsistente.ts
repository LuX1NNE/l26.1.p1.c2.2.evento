import { I_vAsistente } from "../interfaces/I_vAsistente.js";
export default class Cl_vAsistente implements I_vAsistente{

    inNombre: HTMLInputElement;
    inApellido: HTMLInputElement;
    inCedula: HTMLInputElement;
    inSexo: HTMLSelectElement;
    inFechaNacimiento: HTMLInputElement;
    inEstudiante: HTMLSelectElement;
    inTipoEntrada: HTMLSelectElement;
    btAceptar: HTMLButtonElement;
    btCancelar: HTMLButtonElement;
    vista: HTMLElement;

    constructor(){
        this.vista = document.getElementById("Asistente") as HTMLElement;
        this.inNombre = document.getElementById("Asistente_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("Asistente_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("Asistente_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("Asistente_inSexo") as HTMLSelectElement;
        this.inEstudiante = document.getElementById("Asistente_inEstudiante") as HTMLSelectElement;
        this.inTipoEntrada = document.getElementById("Asistente_inTipoEntrada") as HTMLSelectElement;
        this.inFechaNacimiento = document.getElementById("Asistente_inFechaNacimiento") as HTMLInputElement;
        this.btAceptar = document.getElementById("Asistente_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("Asistente_btCancelar") as HTMLButtonElement;
    }

    get nombre(): string{
        return this.inNombre.value.trim();
    }
    get apellido(): string{
        return this.inApellido.value.trim();
    }
    get cedula(): number{
        return this.inCedula.value? +this.inCedula.value: 0;
    }
    get sexo(): "M" | "F"{
        return this.inSexo.value as "M" | "F";
    }
    get estudiante(): "si" | "no"{ 
        return this.inEstudiante.value as "si" | "no";
    }
    get tipoEntrada(): "regular" | "vip"{
        return this.inTipoEntrada.value as "regular" | "vip";
    }
    get fechaNacimiento(): Date{
        return this.inFechaNacimiento.value? new Date(this.inFechaNacimiento.value): new Date();
    }
    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }
    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
    }
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
  }
}