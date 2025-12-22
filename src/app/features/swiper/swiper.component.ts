import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, Input,} from '@angular/core';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {SwiperType} from '../../core/constants/const';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements AfterViewInit {
  @Input({ required: true }) type!: SwiperType;
  private swiper!: Swiper;
  private elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    const target = this.elementRef.nativeElement.querySelector('.swiper');
    const config = this.getSwiperConfig(this.type);
    this.swiper = new Swiper(target, {
      modules: [Pagination, Navigation],
      ...config,
      slidesPerView: 1,
      speed: 600,
    });
  }

  getSwiperConfig(type: SwiperType) {
    switch (type) {
      case SwiperType.GALLERY:
        return {
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        };
      case SwiperType.NEW:
        return {
          spaceBetween: 10,
          breakpoints: {
            320: {
              spaceBetween: 300,
            },
            769: {
              spaceBetween: 10,
            },
          },
          pagination: {
            el: '.new-stickers__pagination',
            clickable: true,
            renderBullet: (index: number, className: string) => {
              const number = index + 1;
              return `<span class="${className}">${number}</span>`;
            },
          },
        };
      default:
        return {};
    }
  }
}
