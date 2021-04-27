import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/shared/oferta.model';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
})
export class ComoUsarComponent implements OnInit {

  public dado: any;

  constructor(
    private route: ActivatedRoute,
    public ofertaService: OfertasService,
    ) { }

  ngOnInit(): void {
    this.ofertaService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((data: any) => {
      this.dado = data;
    })
    //pegando valor do parametro da rota PAI no caso oferta component
    //router-outlet
    
  }

}
