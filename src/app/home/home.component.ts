import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  constructor(
    private OfertasService: OfertasService
  ){ }

  ngOnInit(): void {
    console.log(this.OfertasService.getOfertas());
  }
}
