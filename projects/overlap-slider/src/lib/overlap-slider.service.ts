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
    const element = document.querySelector('.second') as HTMLDivElement;
    if(!element) return;
    const milliseconds = this.currentState() === 'visible' ? 0 : 1500;
    setTimeout(() => {
      element.style.display = this.currentState() === 'visible' ? 'block' : 'none';
    }, milliseconds);
  }
}
