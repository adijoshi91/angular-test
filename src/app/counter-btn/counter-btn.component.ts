import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-btn',
  template: `
    <button (click)="increment()">Clicked {{ count$ | async }} times</button>
  `
})
export class CounterBtnComponent {
  count$ = this.counterService.counter$;

  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.incrementCounter();
  }
}