import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[];

  constructor(
    private ofertasService: OfertasService
  ){ }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas();
    this.ofertasService.getOfertas2().then((data: Oferta[])=>{
      console.log("RESOLVE 5 segundos")
      this.ofertas = data
    }).catch((param: any)=>{
      console.log("A",param)
    })
    console.log(this.ofertas)
  }

}
