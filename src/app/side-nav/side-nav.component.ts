import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  color = '#f1f1f1';

  private subscription!: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getCount('sidenav').subscribe(count => {
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
