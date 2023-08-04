import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  color = '#333';

  private subscription!: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getCount('header').subscribe(count => {
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
