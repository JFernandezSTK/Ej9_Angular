import { Injectable } from '@angular/core';
import { alumno } from './_modelo/alumno';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudAlumnosService {
  alumno:alumno[]
  alm:alumno

  constructor() { 
    let alum1:alumno = {
      id:1,
      dni:"123456789A",
      nombre:"pepe",
      hrs:12
    }

    let alum2:alumno = {
      id:2,
      dni:"123456789B",
      nombre:"pepa",
      hrs:14
    }

    let alum3:alumno = {
      id:3,
      dni:"123456789C",
      nombre:"jose",
      hrs:18
    }
    this.alumno=[
      alum1,alum2,alum3
    ]

  }

  busca(id:number): Observable<alumno>{
    let busca = this.alumno.find(alm => alm.id == id)
    return busca !=undefined? of(busca):of({id:0,dni:"",nombre:"",hrs:0})
  }

  anadir(a:alumno){
    this.alumno.push(a)
  }

  muestra(): Observable<alumno[]>{
    return of(this.alumno)
  }

  modificarAlumno(id:number,dni:string,nombre:string,horas:number){
    let a=this.alumno.find(a => a.id == id)
    if(a != undefined) {
      let index = this.alumno.indexOf(a)
      a.dni=dni
      a.nombre=nombre
      a.hrs = horas
      this.alumno[index] = a
    }

  }
}
