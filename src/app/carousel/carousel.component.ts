import { Component, Input, OnInit } from '@angular/core';
import {CAROUSEL} from './carousel.config'

interface carouselImages{
  imageSrc:string,
  imageAlt:string,
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
  @Input() autoSlide: boolean = true;
  @Input() interval:number = 4000;
  slidingInterval!: ReturnType<typeof setInterval>;
  
  constructor() { }

  selectedIndex = 0;
  
  ngOnInit(): void {
    if(this.autoSlide)
    this.autoSlider()
  }

  onClickSelectedCarouselContent(index: number)
  {
    this.selectedIndex = index;
    if (this.autoSlide){
    clearInterval(this.slidingInterval)
    this.autoSlider()
  }
  }

  autoSlider(){
    this.slidingInterval = setInterval(()=>{
      this.selectedIndex++
      if (this.selectedIndex === this.images.length) {
        this.selectedIndex = 0;
      }
    },this.interval)
  }
}
