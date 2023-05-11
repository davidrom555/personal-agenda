import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentarios';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-task-list.component',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class ListComentariosComponent implements OnInit {

  comentario :Comentario;
  listComentarios : Comentario[];
  
  constructor(private comentarioService : ComentarioService
   
    ) { }
    
  ngOnInit(): void {
    this.getComentario();
  }
  
   getComentario(){
    
     this.comentarioService.getComentarios().subscribe(
       data =>{
         this.listComentarios = data;
       }
     )
   }
   delete(id : any){
    
     this.comentarioService.deleteTask(id).subscribe(
      data =>{
        this.getComentario();
      }
    )
   }

}
