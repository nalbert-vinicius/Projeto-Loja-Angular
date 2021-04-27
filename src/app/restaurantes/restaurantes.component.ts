import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  data?: Oferta[];

  constructor(
    private ofertasService: OfertasService
  ) { }


  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante').then((data: Oferta[])=>{
      this.data=data;
    })
  }

}
