import { Estadio } from "./estadio";

export class Clube {
    id : number;
    nome: string;
    anoFundacao: number;
    urlRedeSocial: string; 
    ativo: boolean;
    estadio: Estadio; 
}
