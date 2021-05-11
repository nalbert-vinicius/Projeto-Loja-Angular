import { Pipe, PipeTransform } from "@angular/core";
//Pipe deve ser importado no modulo da aplicação
// Também deve ser indicado um nome
@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
    transform(texto: string): string {
        if(texto.length >15){
            //caso texto seja maior que 15 caracteres
            //ele concatena ...
            return texto.substr(0,15)+'... ';
        }
        return texto;
    }
}