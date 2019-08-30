import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpartenaire',
  templateUrl: './addpartenaire.component.html',
  styleUrls: ['./addpartenaire.component.scss']
})
export class AddpartenaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSavepart(data){
    console.log(data);

  }

}
