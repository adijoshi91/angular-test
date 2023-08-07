import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [CounterService]
})
export class SideNavComponent {}
