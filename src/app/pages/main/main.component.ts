import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {AuctionLiveComponent} from '../../features/auction-live/auction-live.component';
import {AuctionsGalleryComponent} from '../../features/auctions-gallery/auctions-gallery.component';
import {NewStickersComponent} from '../../features/new-stickers/new-stickers.component';
import {SubscribeComponent} from '../../features/subscribe/subscribe.component';
import {BecomeAuthorComponent} from '../../features/become-author/become-author.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    AuctionLiveComponent,
    AuctionsGalleryComponent,
    NewStickersComponent,
    SubscribeComponent,
    BecomeAuthorComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
