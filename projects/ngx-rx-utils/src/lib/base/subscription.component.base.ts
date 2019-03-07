import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SubscriptionBase } from './subscription.base';

export abstract class SubscriptionComponentBase extends SubscriptionBase implements OnDestroy {
  private readonly subs: Subscription = new Subscription();

  constructor() {
    super();
  }

  /**
   * Manages tracking and unsubscription of given observable
   * @returns void
   */
  subscribeTo(observable: Observable<any>, tagName: string, cb: (...args: any[]) => void): void {
    this.subs.add(super.subscribeAndTag(observable, tagName, cb));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
