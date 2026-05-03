import Cl_mAsistente from "./Cl_mAsistente.js";
export default class Cl_mEvento{
    acumTotalPrecio: number = 0;
    acumDescuentos: number = 0;
    contTotalAsistentes: number = 0;
    contTotalAsistentesVIP: number = 0;
    contTotalAsistentesRegulares: number = 0;
    contMayoresEdad: number = 0;
    contMenoresEdad: number = 0;
    acumEdad: number = 0;

    procesarAsistente(asistente: Cl_mAsistente): void{
        this.contTotalAsistentes++
        this.acumEdad += asistente.edad;
        if(asistente.tipoEntrada === "vip"){
            this.contTotalAsistentesVIP++
        }
        if(asistente.tipoEntrada === "regular"){
            this.contTotalAsistentesRegulares++
        }
        if(asistente.edad >= 18){
            this.contMayoresEdad++
        }
        if(asistente.edad < 18){
            this.contMenoresEdad++
        }
        this.acumTotalPrecio += asistente.precio();
        this.acumDescuentos += asistente.descuento();
    }
    get totalAsistentes(): number{
        return this.contTotalAsistentes;
    }
    get totalVIP():number {
        return this.contTotalAsistentesVIP;
    }
    get totalRegulares(): number{
        return this.contTotalAsistentesRegulares;
    }
    get totalPrecio():number{
        return this.acumTotalPrecio;
    }
    get totalDescuentos():number{
        return this.acumDescuentos;
    }

    prctMayores():number{
        return this.contMayoresEdad/this.contTotalAsistentes*100;
    }

    prctMenores():number{
        return this.contMenoresEdad/this.contTotalAsistentes*100;
    }

    prctVIP():number{
        return this.contTotalAsistentesVIP/this.contTotalAsistentes*100;
    }
    
    prctRegulares():number{
        return this.contTotalAsistentesRegulares/this.contTotalAsistentes*100;
    }
    promEdad(): number{
        return this.acumEdad/this.totalAsistentes;
    }
}