import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';
import {SwiperType} from '../../core/constants/const';

@Component({
  selector: 'app-auctions-gallery',
  imports: [
    SwiperComponent
  ],
  templateUrl: './auctions-gallery.component.html',
  styleUrl: './auctions-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionsGalleryComponent {
  protected readonly SwiperType = SwiperType;
}
