import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {AuctionLiveComponent} from '../../features/auction-live/auction-live.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    AuctionLiveComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
