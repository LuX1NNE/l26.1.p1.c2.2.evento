import Cl_mEvento from "../models/Cl_mEvento.js";
import { I_vEvento } from "../interfaces/I_vEvento.js";
import Cl_cAsistente from "./Cl_cAsistente.js";

export default class Cl_cEvento{
    private mEvento: Cl_mEvento = new Cl_mEvento();
    private vEvento: I_vEvento;
    private cAsistente: Cl_cAsistente;
    constructor(vistaEvento: I_vEvento, controladorAsistente: Cl_cAsistente){
        this.vEvento = vistaEvento;
        this.cAsistente = controladorAsistente;
        this.vEvento.onAgregarAsistente(() => this.procesarNuevoAsistente());
    }
    private procesarNuevoAsistente(): void{
        this.cAsistente.solicitarAsistente((Asistente) => {
            if (Asistente !== null){
                this.mEvento.procesarAsistente(Asistente);
                this.vEvento.reportar({totalPrecio: this.mEvento.totalPrecio, totalDescuentos: this.mEvento.totalDescuentos, totalAsistentes: this.mEvento.totalAsistentes, totalVIP: this.mEvento.totalVIP, totalRegulares: this.mEvento.totalRegulares, prctMenores: this.mEvento.prctMenores(), prctMayores: this.mEvento.prctMayores(), prctRegulares: this.mEvento.prctRegulares(), prctVIP: this.mEvento.prctVIP(), promEdad: this.mEvento.promEdad()});
            }
        });
    }
}