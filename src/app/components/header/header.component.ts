import { Component, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onclick()
  {
   this.clicked.emit(null);
  }

}
