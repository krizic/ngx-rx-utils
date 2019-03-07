import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { create } from 'rxjs-spy';
import { Spy } from 'rxjs-spy/spy-interface';
import { SubscriptionBase } from './subscription.base';

export abstract class SubscriptionComponentBase extends SubscriptionBase implements OnDestroy {
  private readonly subs: Subscription = new Subscription();
  readonly observerSpy: Spy = create();

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
    this.observerSpy.teardown();
  }
}
