import { Component, Input, OnInit } from '@angular/core';

interface dataSource {
  imageSrc: string;
  imageAlt: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() dataSource: dataSource[] = [];
  @Input() autoSlide: boolean = true;
  @Input() interval: number = 4000;

  constructor() {}

  slidingInterval!: ReturnType<typeof setInterval>;
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) this.autoSlider();
  }

  onClickSelectedCarouselContent(index: number) {
    this.selectedIndex = index;
    if (this.autoSlide) {
      clearInterval(this.slidingInterval);
      this.autoSlider();
    }
  }

  autoSlider() {
    this.slidingInterval = setInterval(() => {
      this.selectedIndex++;
      if (this.selectedIndex === this.dataSource.length) {
        this.selectedIndex = 0;
      }
    }, this.interval);
  }
}
