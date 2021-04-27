import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService{

    constructor(
        private http: HttpClient
    ){ }

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição Http
        return this.http.get(`${URL_API}/ofertas?destaque=true`).toPromise().then((resposta: any)=> resposta)
        //retorna dados    ate aqui é retornado um observablo / aqui é convertido para uma promise
    }    

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?ofertas?categoria=${categoria}`).toPromise().then((x:any )=> x);
    }

    public getOfertasPorId(id: number): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?ofertas?id=${id}`).toPromise().then((x: any) => x );
    }

    public getComoUsarOfertaPorId(id:number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise().then((x: any) => x[0]);
    }

    public getOndeFicaPorId(id:number): Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise().then((x: any) => x[0]);
    }
}