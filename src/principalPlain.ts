import Cl_mEvento from "./models/Cl_mEvento.js";
import Cl_mAsistente from "./models/Cl_mAsistente.js";
import Cl_vEvento from "./views/Cl_vEvento.js";
import Cl_vAsistente from "./views/Cl_vAsistente.js";
import Cl_cAsistente from "./controllers/Cl_cAsistente.js";

const mEvento = new Cl_mEvento();
const vEvento = new Cl_vEvento();
const vAsistente = new Cl_vAsistente();

const cAsistente = new Cl_cAsistente(vAsistente);

mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Ana", apellido: "Gil", cedula: 8888, sexo: "F", fechaNacimiento: new Date(2001, 5, 15), tipoEntrada: "vip", estudiante: "no" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Mery", apellido: "Paz", cedula: 6666, sexo: "F", fechaNacimiento: new Date(2009, 6, 25), tipoEntrada: "regular", estudiante: "si" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Juan", apellido: "Sanz", cedula: 9999, sexo: "M", fechaNacimiento: new Date(1980, 8, 20), tipoEntrada: "regular", estudiante: "si" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Paty", apellido: "Ortiz", cedula: 3333, sexo: "F", fechaNacimiento: new Date(1970, 4, 14), tipoEntrada: "vip", estudiante: "no" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Liz", apellido: "Ramos", cedula: 2222, sexo: "F", fechaNacimiento: new Date(2005, 0, 3), tipoEntrada: "regular", estudiante: "si" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Raul", apellido: "Méndez", cedula: 5555, sexo: "M", fechaNacimiento: new Date(1995, 9, 11), tipoEntrada: "vip", estudiante: "no" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Tony", apellido: "Flores", cedula: 7777, sexo: "M", fechaNacimiento: new Date(2008, 7, 7), tipoEntrada: "regular", estudiante: "si" }));
mEvento.procesarAsistente(new Cl_mAsistente({ nombre: "Gaby", apellido: "Lopez", cedula: 1111, sexo: "F", fechaNacimiento: new Date(1966, 6, 19), tipoEntrada: "regular", estudiante: "no" }));

vEvento.reportar({
    totalPrecio: mEvento.acumTotalPrecio,
    totalDescuentos: mEvento.totalDescuentos,
    totalAsistentes: mEvento.totalAsistentes,
    totalVIP: mEvento.totalVIP,
    totalRegulares: mEvento.totalRegulares,
    prctMenores: mEvento.prctMenores(),
    prctMayores: mEvento.prctMayores(),
    prctRegulares: mEvento.prctRegulares(),
    prctVIP: mEvento.prctVIP(),
    promEdad: mEvento.promEdad()
});

vEvento.btAgregarAsistente.onclick = () => {
    cAsistente.solicitarAsistente((nuevoAsistente) => {
        if (nuevoAsistente) {
            mEvento.procesarAsistente(nuevoAsistente);
            vEvento.reportar({
                totalPrecio: mEvento.acumTotalPrecio,
                totalDescuentos: mEvento.totalDescuentos,
                totalAsistentes: mEvento.totalAsistentes,
                totalVIP: mEvento.totalVIP,
                totalRegulares: mEvento.totalRegulares,
                prctMenores: mEvento.prctMenores(),
                prctMayores: mEvento.prctMayores(),
                prctRegulares: mEvento.prctRegulares(),
                prctVIP: mEvento.prctVIP(),
                promEdad: mEvento.promEdad()
            }); 
        }
    });
}