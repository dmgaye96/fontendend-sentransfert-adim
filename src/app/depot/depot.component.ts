import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  depot;
  compte ={};
  constructor( private comptes:RegisterService ,private autentification:AuthService) { }

  ngOnInit() {
 this.comptes.getAllcomptess().subscribe(

 res=>{
        console.log(res);
        this.depot=res

      }, err=>{
        console.log(err);
      }
    )
   }




   onsubmit (data:any){
    console.log(data);

     this.comptes.addDepot(data)
     .subscribe(
       data=>{
         console.log('done');

       }, err=>{
        console.log(err);
       }
     )
   }

}
