import { Observable, Subscription } from 'rxjs';
import { tag } from 'rxjs-spy/operators/tag';

export abstract class SubscriptionBase {

  /**
   * Manages tracking and of given observable
   */
  subscribeAndTag(observable: Observable<any>, tagName?: string, cb?: (...args: any[]) => void): Subscription {
    const withLogger = !!tagName ? observable.pipe(tag(tagName)) : observable;
    return withLogger.subscribe(cb);
  }
}
