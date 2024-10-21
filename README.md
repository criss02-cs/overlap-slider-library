# OverlapSlider

Questa libreria è stata generata con [Angular CLI](https://github.com/angular/angular-cli) versione 17.3.0.

## Introduzione

`OverlapSlider` è un componente Angular che permette di sovrapporre due sezioni di contenuto e di alternarle con un'animazione.

## Installazione

Per installare la libreria, esegui:

```sh
npm install overlap-slider
```
app.component.ts
```ts
import { Component } from '@angular/core';
import { OverlapSliderService } from 'overlap-slider';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private overlapSliderService: OverlapSliderService) {}

  toggleSlider() {
    this.overlapSliderService.toggle();
  }
}

```
app.component.html
```html
<button (click)="toggleSlider()">Toggle Slider</button>
<overlap-slider>
  <div first style="background-color: red;">
    <h1>Primo Contenuto</h1>
    <p>Questo è il primo contenuto.</p>
  </div>
  <div second style="background-color: yellow;">
    <h1>Secondo Contenuto</h1>
    <p>Questo è il secondo contenuto.</p>
  </div>
</overlap-slider>
```