import {inject, Injectable, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private mediaQuery: MediaQueryList | null = null;
  public isMobile = signal(false);

  constructor() {
    const document = inject(DOCUMENT);
    const window = this.getWindow(document);
    if (window) {
      this.mediaQuery = window.matchMedia('(max-width: 768px)');
      this.isMobile.set(this.mediaQuery.matches);
      this.mediaQuery.addEventListener('change', (e) => {
        this.isMobile.set(e.matches);
      });
    }
  }

  private getWindow(doc: Document): Window | null {
    if (typeof window !== 'undefined' && doc.defaultView) {
      return doc.defaultView;
    }
    return null;
  }
}
