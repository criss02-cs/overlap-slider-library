import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlapSliderService {
  currentState = signal('initial');
  constructor() { }

  toggle() {
    this.currentState.update(state => {
      if (state === 'visible') {
        return 'not-visible'
      } else {
        return 'visible';
      }
    });
  }
}
