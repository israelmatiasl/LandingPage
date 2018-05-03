import { Component, OnInit } from '@angular/core';

declare function init_app();
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}

  ngOnInit(){
    init_app();
  }

  goFeature(){
    //console.log('Hola');
    $("html, body").animate({ scrollTop: $('body').prop("scrollHeight")}, 1000);
  }
}
