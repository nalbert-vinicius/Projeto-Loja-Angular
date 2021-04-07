import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfertasService{

    constructor(
        private http: HttpClient
    ){ }

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição Http
        return this.http.get('http://localhost:3000/ofertas').toPromise().then((resposta: any)=> resposta)
        //retorna dados  
    }    
}