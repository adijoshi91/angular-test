import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-btn',
  template: `
    <button (click)="increment()">Clicked {{ count }} times</button>
  `
})
export class CounterBtnComponent implements OnInit, OnDestroy {
  @Input()
  counterId!: string;
  count = 0;
  private subscription!: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getCount(this.counterId).subscribe(count => {
      this.count = count;
    });
  }

  increment() {
    this.counterService.increment(this.counterId);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}