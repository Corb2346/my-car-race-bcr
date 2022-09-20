import { Component } from '@angular/core';
import { Autos } from './models/auto.model';
import { Pilotos } from './models/piloto.model';
import { Carrera } from './models/carrera.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-car-race';

  constructor(){
    this.crearCarrera();
    this.arrayAndObjectsAutos();
    this.arrayAnObjectsPilotos();

  }

  arrayAndObjectsAutos(){
    const autoUno : Autos = {
      numeroAuto : 1,
      color : 'blue',
      distanciaRecorrida : 0,
      status : 'detenido',
      piloto : 'pilotoName1'
    };

    this.arrancar(autoUno);
    let distancia = this.actalizarDistancia();
    autoUno.distanciaRecorrida = distancia;
    
    this.detener(autoUno);

    console.log(distancia);
    
    console.log(autoUno);

  }

  arrayAnObjectsPilotos(){

    const pilotoUno : Pilotos = {
      idPiloto :1,
      nombrePiloto :'piloto1Nombre',
      apellidosPiloto : 'ApellidosPilotoUno',
      NACIONALIDAD : 'NacionalidadPiloto1'
    }
    console.log(pilotoUno);
  }

  crearCarrera(){

    const carreraUno : Carrera = {
    listaCompetidores: [] = ['competidor','competidor2'],
    vueltas: 3,
    distanciaKmVueltas: 5,
    status:'nueva'
    }
    console.log(carreraUno);
  }

 
  

  arrancar(auto : Autos):void{
    auto.status = 'avanzando';

  };
  actalizarDistancia():number{
   
      return Math.floor((Math.random() * (50 - 1 + 1)) + 1);

  };

  detener(auto : Autos):void{
    auto.status = 'detener';
  };



  iniciarCarrea(){
console.log('ya sirce iniviciar carrera');
  }

  










}


