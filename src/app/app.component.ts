import { Component,AfterViewInit, ViewChild } from '@angular/core';
// import {SidenavService} from '../app/components/services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  constructor()
  {

  }
  ngAfterViewInit(): void {
    // this.service.setSidenav(this.sidenav);
  }
  title = 'Angular-version';
}
