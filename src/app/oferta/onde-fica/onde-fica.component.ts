import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  public dado: any;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
    ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametros: any) => {
      this.ofertaService.getOndeFicaPorId(parametros.id)
        .then((data: any) => {
        this.dado = data;
      })
    })
    
  }
}
