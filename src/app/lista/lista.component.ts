import { Component } from '@angular/core';
import { alumno } from '../_modelo/alumno';
import { CrudAlumnosService } from '../crud-alumnos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  lista:alumno[]
  
  ngOnInit(){
    this.alm.muestra()
      .subscribe(arg => this.lista = arg);
  }
  constructor(private alm:CrudAlumnosService){
  }
}
