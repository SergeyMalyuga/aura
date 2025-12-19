import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';
import {SwiperType} from '../../core/constants/const';

@Component({
  selector: 'app-new-stickers',
  imports: [
    SwiperComponent
  ],
  templateUrl: './new-stickers.component.html',
  styleUrl: './new-stickers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStickersComponent {

  protected readonly SwiperType = SwiperType;
}
