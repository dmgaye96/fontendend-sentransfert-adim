import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


private url:string = "http://localhost:8000/api/liste/profile";

  constructor(private http: HttpClient, private authService: AuthService) { }


  getAllProfil() : Observable<any[]>  {


    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return  this.http.get<any>(this.url , {headers : headers} );
 }


  addregister(register, fileToUpload){

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/register";

    const formData: FormData= new FormData();
    formData.append('login', register.login);
    formData.append('nom', register.nom);
    formData.append('telephone', register.telephone);
    formData.append('password', register.password);
    formData.append('email', register.email);
    formData.append('telephone', register.telephone);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    formData.append('Profil', register.Profil);

    return this.http.post(host, formData , {headers : headers} );
  }


  getAllcompte() : Observable<any[]>  {

    const host = "http://localhost:8000/api/liste/partenaireliste";

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return  this.http.get<any>( host, {headers : headers} );
 }
addCompt(compte){

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  const host = "http://localhost:8000/api/compte/new";



  const formData: FormData= new FormData();

  formData.append('partenaire', compte.partenaire);

  return this.http.post(host, formData , {headers : headers} );

}


}
