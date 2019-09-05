import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  depot;
 infocompte={};
//  compte ={};
  constructor( private comptes:RegisterService ,private autentification:AuthService , private router:Router ) { }

  ngOnInit() {

   }



   onsubmit(data:any){


    this.comptes.getAllcomptess(data).subscribe(

      resp=>{
          console.log(resp);

         this.infocompte = resp;
          console.log(this.infocompte);

        }, err=>{
             console.log(err);
           }
         )

   }

   onsubmit1 (data:any){
    console.log(data);

     this.comptes.addDepot(data)
     .subscribe(
       data=>{
         console.log('done');
        this.router.navigate(['auth', 'signin']);

       }, err=>{
        console.log(err);
       }
     )
   }

}
