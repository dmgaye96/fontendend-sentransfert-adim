import {Component, ViewChild, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PartenaireService } from '../partenaires.service';



@Component({
  selector: 'app-listepartenaire',
  templateUrl: './listepartenaire.component.html',
  styleUrls: ['./listepartenaire.component.scss']
})
export class ListepartenaireComponent implements OnInit {

 partenaire;
 dtoptions: DataTables.Settings={};
  constructor( private partenaireservice:PartenaireService){
  }

  ngOnInit(): void {

    this. partenaireservice.getPartenaires()
    .subscribe(
      res => this.partenaire = res,
      err => console.log(err)
    )
  }

}
