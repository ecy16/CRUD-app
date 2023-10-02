import { Component, OnInit, ViewChild,Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  @Input() messageFromParent: string | undefined;

  constructor(){}

  ngOnInit(){
    console.log(this.messageFromParent);
    
  }

}
