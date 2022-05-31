import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  color: string = " "

  changeBtn() {
    //change to your wanted color
    this.color = "red";
  }

}
