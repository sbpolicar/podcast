import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  expanded = false;

  constructor(public dialog: MatDialog) {
    this.dialog.open(ModalComponent, {
      width: '500px',
      // height: '500px',
    });
  }

  ngAfterViewInit() {
  }
}
