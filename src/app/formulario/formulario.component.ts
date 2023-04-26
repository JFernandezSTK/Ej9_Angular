import { Component } from '@angular/core';
import { alumno } from '../_modelo/alumno';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudAlumnosService } from '../crud-alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { Observable,of } from 'rxjs';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  alumno:alumno
  formulario:FormGroup = new FormGroup({})

  ngOnInit(){
    this.formulario = new FormGroup({
      id: new FormControl(''),
      dni: new FormControl(''),
      nombre: new FormControl(''),
      horas: new FormControl('')
    })

    this.ruta.params.subscribe(arg =>{      
      
      this.a.busca(arg['id']).subscribe(data =>{
        this.formulario = new FormGroup({
          id: new FormControl(data.id),
          dni: new FormControl(data.dni),
          nombre: new FormControl(data.nombre),
          horas: new FormControl(data.hrs)
        })
      })
      
    })
  }

  constructor(private a:CrudAlumnosService, private ruta:ActivatedRoute){
    this.alumno={
      id:0,
      dni:"",
      nombre:"",
      hrs:0
    }

  }
  anadir(){
    this.alumno={
      id:this.formulario.value.id,
      dni:this.formulario.value.dni,
      nombre:this.formulario.value.nombre,
      hrs:this.formulario.value.horas
    }
    this.a.anadir(this.alumno)
  }

  cambio(){
    if(this.ruta.snapshot.params["id"] == undefined){
      this.anadir()
    }else{
      this.modificar()
    }
  }

  modificar(){
    this.alumno={
      id:this.formulario.value.id,
      dni:this.formulario.value.dni,
      nombre:this.formulario.value.nombre,
      hrs:this.formulario.value.horas
    }
    this.a.modificarAlumno(this.alumno.id,this.alumno.dni,this.alumno.nombre,this.alumno.hrs)
  }
}
