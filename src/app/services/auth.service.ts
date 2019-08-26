import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 host: string = "http://localhost:8000/api/login";
jwt:string;
username:string;
roles:Array<string>;

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.host ,data,{observe: 'response'});
  }
  saveToken(jwt :string){
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();

  }
  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);

    this.username=objJWT.obj;

    this.roles=objJWT.roles;


  }

  isAdmin(){
    return this.roles.indexOf('ROLE_SUPERADMIN')>=0;
  }
  isCaissier(){
    return this.roles.indexOf('ROLE_CAISSIER')>=0;
   }

    isAdminP(){
      return this.roles.indexOf('ROLE_ADMINP')>=0;
      }


  isUser(){
    return this.roles.indexOf('ROLE_USER')>=0;
  }
  isAuthenticated(){
   return this.roles &&( this.isAdmin() || this.isUser() || this.isAdminP() || this.isCaissier() );
  }
}
