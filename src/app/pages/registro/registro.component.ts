import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  show:boolean=true;
  show1:boolean=true;
  show2:boolean=true;
  show3:boolean=true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
