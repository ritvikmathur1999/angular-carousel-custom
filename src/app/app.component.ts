import { Component } from '@angular/core';
import { CAROUSEL } from './carousel/carousel.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carousel';
  images = CAROUSEL.imageList;
  content = CAROUSEL.content;
}
