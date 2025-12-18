import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, Input} from '@angular/core';
import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent implements AfterViewInit {
  private swiper!: Swiper;
  private elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    const target = this.elementRef.nativeElement.querySelector('.swiper');
    this.swiper = new Swiper(target, {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 600
    })
  }

}
