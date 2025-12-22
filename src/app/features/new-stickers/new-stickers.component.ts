import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';
import {SwiperType} from '../../core/constants/const';
import {ScreenService} from '../../core/services/screen-service';

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
  public readonly SwiperType = SwiperType;
  public screenService = inject(ScreenService);
}
