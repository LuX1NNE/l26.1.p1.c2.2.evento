import { I_vEvento } from "../interfaces/I_vEvento.js";

export default class Cl_vEvento implements I_vEvento{
    
    btAgregarAsistente: HTMLButtonElement;
    lblTotalPrecio: HTMLLabelElement;
    lblTotalDescuentos: HTMLLabelElement;
    lblTotalAsistentes: HTMLLabelElement;
    lblTotalVIP: HTMLLabelElement;
    lblTotalRegulares: HTMLLabelElement;
    lblPrctMenores: HTMLLabelElement;
    lblPrctMayores: HTMLLabelElement;
    lblPrctRegulares: HTMLLabelElement;
    lblPrctVIP: HTMLLabelElement;
    lblPromEdad: HTMLLabelElement;
    vista: HTMLElement | null;
    constructor(){
        this.vista = document.getElementById("app-boostrap") as HTMLElement;
        this.btAgregarAsistente = document.getElementById("body_btAgregarAsistente") as HTMLButtonElement;
        this.lblTotalPrecio = document.getElementById("body_lblTotalPrecio") as HTMLLabelElement;
        this.lblTotalDescuentos = document.getElementById("body_lblTotalDescuentos") as HTMLLabelElement;
        this.lblTotalAsistentes = document.getElementById("body_lblTotalAsistentes") as HTMLLabelElement;
        this.lblTotalVIP = document.getElementById("body_lblTotalVIP") as HTMLLabelElement;
        this.lblTotalRegulares = document.getElementById("body_lblTotalRegulares") as HTMLLabelElement;
        this.lblPrctMenores = document.getElementById("body_lblPrctMenores") as HTMLLabelElement;
        this.lblPrctMayores = document.getElementById("body_lblPrctMayores") as HTMLLabelElement;
        this.lblPrctRegulares = document.getElementById("body_lblPrctRegulares") as HTMLLabelElement;
        this.lblPrctVIP = document.getElementById("body_lblPrctVIP") as HTMLLabelElement;
        this.lblPromEdad = document.getElementById("body_lblPromEdad") as HTMLLabelElement;
    }
    onAgregarAsistente(callback: () => void): void {
        this.btAgregarAsistente.onclick = callback;
    }
    reportar({totalPrecio, totalDescuentos, totalAsistentes, totalVIP, totalRegulares, prctMenores, prctMayores, prctRegulares, prctVIP, promEdad}:
    {totalPrecio: number, totalDescuentos: number, totalAsistentes: number, totalVIP: number, totalRegulares: number, prctMenores: number, prctMayores: number, prctRegulares: number, prctVIP: number, promEdad: number}): void {
        this.lblTotalPrecio.innerHTML = `${totalPrecio}`;
        this.lblTotalDescuentos.innerHTML = `${totalDescuentos}`;
        this.lblTotalAsistentes.innerHTML = `${totalAsistentes}`;
        this.lblTotalVIP.innerHTML = `${totalVIP}`;
        this.lblTotalRegulares.innerHTML = `${totalRegulares}`;
        this.lblPrctMenores.innerHTML = `${prctMenores.toFixed(2)}`;
        this.lblPrctMayores.innerHTML = `${prctMayores.toFixed(2)}`;
        this.lblPrctRegulares.innerHTML = `${prctRegulares.toFixed(2)}`;
        this.lblPrctVIP.innerHTML = `${prctVIP.toFixed(2)}`;
        this.lblPromEdad.innerHTML = `${promEdad.toFixed(2)}`;
        
    }
}