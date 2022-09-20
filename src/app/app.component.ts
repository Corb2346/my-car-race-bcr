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
    const autos : Autos[] = [{
      numeroAuto : 1,
      color : 'blue',
      distanciaRecorrida : 0,
      status : 'detenido',
      piloto : 1
    },
    {
      numeroAuto : 2,
      color : 'green',
      distanciaRecorrida : 0,
      status : 'detenido',
      piloto : 2
    },  
    {
      numeroAuto : 3,
      color : 'red',
      distanciaRecorrida : 0,
      status : 'detenido',
    }];

    /*this.arrancar(autoUno);
    let distancia = this.actalizarDistancia();
    autoUno.distanciaRecorrida = distancia;
    
    this.detener(autoUno);

    console.log(distancia);*/
    
    console.log(autos);

  }

  arrayAnObjectsPilotos():Pilotos[]{

    const pilotos : Pilotos[] = [{
      idPiloto :1,
      nombrePiloto :'piloto1Nombre',
      apellidosPiloto : 'ApellidosPilotoUno',
      NACIONALIDAD : 'NacionalidadPilotoUno'
    },
    {
      idPiloto :2,
      nombrePiloto :'piloto2Nombre',
      apellidosPiloto : 'ApellidosPilotoDos',
      NACIONALIDAD : 'NacionalidadPilotoDos'
    },
    {
      idPiloto :3,
      nombrePiloto :'piloto3Nombre',
      apellidosPiloto : 'ApellidosPilotoTres',
      NACIONALIDAD : 'NacionalidadPilotoTres'
    }];
    console.log(pilotos);
    return pilotos;
    
  }

  crearCarrera(){

    const carreraUno : Carrera = {
    listaCompetidores: [] = ['competidor1','competdiro2'],
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


