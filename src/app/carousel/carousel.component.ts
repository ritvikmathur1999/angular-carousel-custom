import { Component, OnInit } from '@angular/core';
import {IMAGES} from './carousel.config'

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  selectedIndex = 0;
  images = IMAGES.imageList
  
  ngOnInit(): void {
  }

  selectedImage(index: number)
  {
    this.selectedIndex = index
  }

}
