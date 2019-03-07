import { OnDestroy } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { tag } from 'rxjs-spy/operators/tag';

export abstract class SubscriptionComponentBase implements OnDestroy {
  // track of every subscribtion in total
  // report per component the subscribtions

  private counter = 0;
  private readonly $counter: BehaviorSubject<number> = new BehaviorSubject(this.counter);
  private readonly subs: Subscription = new Subscription();

  constructor() {}

  subscribeTo(observable: Observable<any>, cb: () => any, tagName: string) {
    const withLogger = observable.pipe(tag(tagName));
    this.subs.add(withLogger.subscribe(cb));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
