import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlapSlider } from "../../../overlap-slider/src/lib/overlap-slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverlapSlider],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-overlap-slider';
}
