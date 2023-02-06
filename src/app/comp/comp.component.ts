import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { storeCars } from '../storecars';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  public city = ''
  constructor(private route: ActivatedRoute) 
  {
    // this.city = storeCars.getSaveCity;
  }

  ngOnInit(): void {
  }

}
