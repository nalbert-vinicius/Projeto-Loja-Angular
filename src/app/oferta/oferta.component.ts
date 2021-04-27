import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  //ActivatedRoute usado para conseguir utilizar o snapshot
  private route: ActivatedRoute;
  public oferta: any;

  constructor(route: ActivatedRoute, private ofertaService: OfertasService) { 
    this.route = route;
  }

  ngOnInit(): void {
    //usando snapshot para recuperar o ID
    //snapshot permite tirar uma copia do parametro vindo da URL
    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id']).then((data: Oferta[]) => {
      this.oferta = data.shift();
      console.log(this.oferta)
    });
  }
}

