import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  //ActivatedRoute usado para conseguir utilizar o snapshot e subscribe
  private route: ActivatedRoute;
  public oferta: any;

  constructor(route: ActivatedRoute, private ofertaService: OfertasService) { 
    this.route = route;
  }

  ngOnInit(): void {
    //subscribre no parametro vindo da URL
    //assim sempre que for atualizado ele realiza uma nova requisição para recuperar dados
    this.route.params.subscribe((parametros: any) => {
      //usando snapshot para recuperar o ID
      //snapshot permite tirar uma copia do parametro vindo da URL
      this.ofertaService.getOfertasPorId(parametros.id).then((data: Oferta[]) => {
        this.oferta = data.shift();
      });
    })
  }
}

