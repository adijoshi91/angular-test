import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from './counter.service';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(private el: ElementRef, private counterService: CounterService) {}

  ngOnInit() {
    this.subscription = this.counterService.counter$.subscribe(count => {
      if (count >= 10) {
        this.el.nativeElement.style.backgroundColor = 'red';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}