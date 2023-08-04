import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  color = '#333';
  private subscription!: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getCount('footer').subscribe(count => {
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
