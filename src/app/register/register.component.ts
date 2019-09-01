import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  profils;
  register = {} ;
  imageUrl: string="/assets/img/default.png ";
  fileToUpload: File=null;
    constructor(private registersService :RegisterService , private authService :AuthService ,private router: Router) { }

    ngOnInit() {

      this.registersService.getAllProfil().subscribe(
        res=>{
          console.log(res);
          this.profils=res
          if (this.authService.getRole()=='ROLE_SUPERADMIN'  ){
             this.profils=[this.profils[0],this.profils[1] ]
          }
        });
      }

    handleFileInput(File : FileList){
      this.fileToUpload=File.item(0);
     var reader= new FileReader();
     reader.onload=(event:any)=>{
       this.imageUrl=event.target.result;

     }
     reader.readAsDataURL(this.fileToUpload);
    }

    onsubmit (data:any){
     console.log(data);
     console.log(this.fileToUpload);
      this.registersService.addregister(data, this.fileToUpload)
      .subscribe(
        data=>{
          console.log('done');


        }, err=>{
         console.log(err);
        }
      )
    }

  }
