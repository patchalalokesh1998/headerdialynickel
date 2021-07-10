import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

// import { matDrawerAnimations } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
// import {SidenavService} from '../../components/services/sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('drawer') public drawer:MatSidenav

  // mode = new FormControl('over');
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor( ) { }

  ngOnInit(): void {
  }

 

  opensidenav()
  {

    console.log('click');
    this.drawer.toggle();
    // this.drawer.toggle();

    // this.sidenav.toggle();
    
    // (click)="drawer.toggle()"
  }

}
