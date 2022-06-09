import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi:number;
  resultado:string;
  interpretacion:string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!; // ! para evitar alerta al indicar number(+  null)
   }

  ngOnInit(): void {
  }

}
