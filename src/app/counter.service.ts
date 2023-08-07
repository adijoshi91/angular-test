import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  private _counter = new BehaviorSubject<number>(0);
  public counter$ = this._counter.asObservable();

  incrementCounter() {
    this._counter.next(this._counter.value + 1);
  }
}