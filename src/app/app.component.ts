import { Component, OnInit,  VERSION } from '@angular/core';
import { VrrService } from './vrr.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private vrrService: VrrService) {}

  ngOnInit() {
    this.vrrService.getTable().subscribe(v => console.log(v));
  }
}
