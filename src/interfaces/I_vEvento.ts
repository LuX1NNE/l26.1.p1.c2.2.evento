export interface I_vEvento{

onAgregarAsistente(callback: () => void): void;

reportar({totalPrecio, totalDescuentos, totalAsistentes, totalVIP, totalRegulares, prctMenores, prctMayores, prctRegulares, prctVIP, promEdad}:
{totalPrecio: number, totalDescuentos: number, totalAsistentes: number, totalVIP: number, totalRegulares: number, prctMenores: number, prctMayores: number, prctRegulares: number, prctVIP: number, promEdad: number}): void
}