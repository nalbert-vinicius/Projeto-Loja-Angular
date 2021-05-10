import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  data?: Oferta[];

  constructor(
    private ofertaService: OfertasService

  ) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria('diversao').then((data: any)=>{
      this.data=data;
    })
  }

}
