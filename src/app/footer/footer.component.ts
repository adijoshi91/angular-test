import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [CounterService]
})
export class FooterComponent {}
