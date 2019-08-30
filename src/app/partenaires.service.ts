import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { IPartenaire } from './models/partenaire';

@Injectable({
  providedIn: 'root'
})

export class PartenaireService {

  public ListepartUrl = "http://localhost:8000/api/liste/partenaireliste";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPartenaires() :Observable<IPartenaire[]> {

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    return this.http.get<IPartenaire[]>(this.ListepartUrl  , {headers : headers}  );
  }
}
