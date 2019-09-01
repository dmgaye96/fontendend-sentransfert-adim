import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.scss']
})
export class AddcompteComponent implements OnInit {
  partenaires;
  compte ={};
  constructor( private comptes:RegisterService ,private autentification:AuthService) { }

  ngOnInit() {
 this.comptes.getAllcompte().subscribe(

 res=>{
        console.log(res);
        this.partenaires=res

      }, err=>{
        console.log(err);
      }
    )
   }




   onsubmit (data:any){
    console.log(data);

     this.comptes.addCompt(data)
     .subscribe(
       data=>{
         console.log('done');

       }, err=>{
        console.log(err);
       }
     )
   }

}
