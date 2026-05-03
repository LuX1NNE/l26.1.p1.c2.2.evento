export interface I_vAsistente{
    get nombre(): string;
    get apellido(): string;
    get cedula(): number;
    get sexo(): "M" | "F";
    get fechaNacimiento(): Date;
    get tipoEntrada(): "regular" | "vip"; 
    get estudiante(): "si" | "no";
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;

}