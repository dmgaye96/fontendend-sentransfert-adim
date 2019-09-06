import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {

infocode={};
retrait;

  constructor( private code:TransactionService) { }

  ngOnInit() {
  }


  onsubmit(data:any){


    this.code.getCode(data).subscribe(

      resp=>{
          console.log(resp);

         this.infocode = resp;
          console.log(this.infocode);
        /*   Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'resp.',
            footer: '<a href>Why do I have this issue?</a>'
          }) */
        }, err=>{
             console.log(err);
           }
         )
   }



   onsubmit1 (data:any){
    console.log(data);

     this.code.Retrait(data)
     .subscribe(
       data=>{
         console.log('done');


       }, err=>{
        console.log(err);
       }
     )
   }



   retraitf = new FormGroup({
    code: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    numeropiece: new FormControl("", [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)
    ]),
    typedepiece: new FormControl("", [
      Validators.required,
      Validators.minLength(3)]) });

  errorMessage = {
    code: [
      { type: "required", message: "Champ username obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 5 lettres" }
    ],
    numeropiece: [
      { type: "required", message: "Champ numeropiece obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 9 lettres" },
      { type: "maxlength", message: "veuillez saisir au maximum 9 lettres" },
      {
        type: "pattern",
        message: "Ecrivez correctement le numero de numeropiece"
      }
    ],
    typedepiece: [
      { type: "required", message: "Champ est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 3 lettres" },
      { type: "telephoneE", message: "Ecrivez correctement le mail" }
    ]
  };




}
