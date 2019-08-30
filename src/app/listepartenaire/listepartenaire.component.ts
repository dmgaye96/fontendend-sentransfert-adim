import {Component, ViewChild, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PartenaireService } from '../partenaires.service';

declare var $;

@Component({
  selector: 'app-listepartenaire',
  templateUrl: './listepartenaire.component.html',
  styleUrls: ['./listepartenaire.component.scss']
})
export class ListepartenaireComponent implements OnInit {

 partenaire = [];
  dtOption: any = {};
  constructor( private partenaireservice:PartenaireService){
  }

  ngOnInit(): void {

    this. partenaireservice.getPartenaires()
    .subscribe(
      res => this.partenaire = res,
      err => console.log(err)
    )

    this.dtOption = {
        "paging":   true,
        "ordering": true,
        "info":     false,
    };
    $(()=>{
$('table.display').DataTable(this.dtOption);
});
  }

}
