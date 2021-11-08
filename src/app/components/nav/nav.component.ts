import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nombre = "Daniela"
  aux: any; 
  constructor() { }

  ngOnInit(): void {
  }
  prueba(){
    console.log('hols')
  }

}
