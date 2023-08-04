import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent {
  color = '#f9f9f9';

  private subscription!: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getCount('content').subscribe(count => {
      if (count >= 10) {
        this.color = 'red';
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
