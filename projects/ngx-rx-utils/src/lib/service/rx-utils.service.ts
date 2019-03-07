import { Injectable } from '@angular/core';
import { create } from 'rxjs-spy';
import { Spy } from 'rxjs-spy/spy-interface';

import { SubscriptionBase } from '../base';

@Injectable({
  providedIn: 'root'
})
export class RxUtils extends SubscriptionBase {

  public readonly spy: Spy = create();

  public log: Spy['log'] = this.spy.log.bind(this.spy);
  public show: Spy['show'] = this.spy.show.bind(this.spy);
  public debug: Spy['debug'] = this.spy.debug.bind(this.spy);

  constructor() {
    super();
  }
}
