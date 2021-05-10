import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public pesquisa?: Oferta[];
  public ofertas?: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(
    private ofertasService: OfertasService
    ) { }

  ngOnInit(): void {
    /**
     * distinctUntilChanged verifica se o termo da requisição anterior é igual ao atual, se sim ele não faz a requisição.
     * debounceTime permite executar a requisição após alguns segundos em espera.
     * switchMap permite tratar o dado que é retornado de um OBSERVABLE. 
     */
    this.ofertas = this.subjectPesquisa.pipe(distinctUntilChanged()).pipe(debounceTime(1000)).pipe(switchMap((termoBusca: string) => {
      if(termoBusca.trim() === ''){
        //retorno de um observable do tipo oferta[]
        return of<Oferta[]>([]);
      }
      return this.ofertasService.pesquisaOferta(termoBusca);
    }))
    catchError((err: any)=>{
      return of<Oferta[]>([]);
    })

    //subscribe no observable retornado
    this.ofertas.subscribe((ofertas: Oferta[]) => this.pesquisa = ofertas)
  }

  pesquisar(busca: string): void{
    // permite que subject realize a requisição
    this.subjectPesquisa.next(busca);
   
  }
}
