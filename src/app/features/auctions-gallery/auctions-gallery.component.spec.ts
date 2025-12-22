import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuctionsGalleryComponent} from './auctions-gallery.component';

describe('AuctionsGalleryComponent', () => {
  let component: AuctionsGalleryComponent;
  let fixture: ComponentFixture<AuctionsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionsGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
