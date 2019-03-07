import { Observable, Subscription } from 'rxjs';
import { tag } from 'rxjs-spy/operators/tag';

export abstract class SubscriptionBase {

  /**
   * Manages tracking and of given observable
   */
  subscribeAndTag(observable: Observable<any>, tagName: string, cb: (...args: any[]) => void): Subscription {
    const withLogger = observable.pipe(tag(tagName));
    return withLogger.subscribe(cb);
  }
}
