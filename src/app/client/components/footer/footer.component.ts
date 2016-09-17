import { Component, OnInit } from '@angular/core';
import {AppState} from "../../../app.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public appState: AppState) { }

  ngOnInit() {
  }

}
