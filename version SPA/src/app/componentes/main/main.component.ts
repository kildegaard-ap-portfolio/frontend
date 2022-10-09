import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  lista = [1, 2, 3, 4, 5];
  nombres = ['Gus', 'Agus', 'Car', 'Ali'];
  miPortfolio: any;
  listaSecu: any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log("Datos del json");
      this.miPortfolio = data;
    });
  }

}
