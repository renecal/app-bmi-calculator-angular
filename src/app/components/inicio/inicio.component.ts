import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 71;
  altura = 170;
  sexo = 'masculino';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarDatoAltura(event: any){
    this.altura = event.target.value
  }

  masculino(){
    this.sexo = 'masculino';
  }

  femenino(){
    this.sexo = 'femenino';
  }

  calcularBMI(){
    // algunos calculos
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    console.log(BMI.toFixed(1)); // redondear a 1 valor despuies de la coma
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }

}
