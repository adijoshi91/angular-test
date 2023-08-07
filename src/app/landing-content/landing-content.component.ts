import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css'],
  providers: [CounterService]
})
export class LandingContentComponent {}
