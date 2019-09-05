/* import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CompteService  {

  constructor(private  http:HttpClient , private authService: AuthService) { }
 host: string = "http://localhost:8000/api/register";


Rechercompt(): Observable<any[]>  {


 const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    return  this.http.get<any>(this.host , {headers : headers} );
}



}
 */
