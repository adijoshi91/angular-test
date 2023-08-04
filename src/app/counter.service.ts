import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counters: { [id: string]: BehaviorSubject<number> } = {};

  increment(id: string) {
    if (!this.counters[id]) {
      this.counters[id] = new BehaviorSubject<number>(0);
    }
    const currentCount = this.counters[id].value;
    this.counters[id].next(currentCount + 1);
  }

  getCount(id: string) {
    if (!this.counters[id]) {
      this.counters[id] = new BehaviorSubject<number>(0);
    }
    return this.counters[id].asObservable();
  }
}
