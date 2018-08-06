import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  expanded: boolean = false;

  title = 'app';
  
  ngAfterViewInit() {
    console.log('height---' + this.contentCard.nativeElement.offsetHeight);
    console.log('width---' + this.contentCard.nativeElement.offsetWidth);
  }

  @ViewChild('contactFormFrame')
  contentCard: ElementRef;
}
