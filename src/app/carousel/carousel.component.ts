import { Component, Input, OnInit } from '@angular/core';
import {CAROUSEL} from './carousel.config'

interface carouselImages{
  imageSrc:string,
  imageAlt:string,
  content:string
}

interface content{
  title:string,
  desc:string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImages[] = []
  @Input() content: content[]=[]
  
  constructor() { }

  selectedIndex = 0;
  // images = IMAGES.imageList
  
  ngOnInit(): void {
    // this.autoSlide()

  }

  selectedImage(index: number)
  {
    this.selectedIndex = index
  }

  autoSlide(){
    setInterval(()=>{
      this.selectedIndex++
      if (this.selectedIndex === this.images.length){
        this.selectedIndex = 0;
      }
    },5000)
  }
}
