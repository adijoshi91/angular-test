import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CounterService]
})
export class HeaderComponent {}
