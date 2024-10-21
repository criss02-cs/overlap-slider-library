import { Component, inject } from '@angular/core';
import { OverlapSliderService } from './overlap-slider.service';

@Component({
  selector: 'overlap-slider',
  standalone: true,
  imports: [],
  templateUrl: './overlap-slider.component.html',
  styleUrl: './overlap-slider.component.scss'	
})
export class OverlapSlider {
  public overlapService = inject(OverlapSliderService);


  toggle() {
    this.overlapService.toggle();
  }
}
