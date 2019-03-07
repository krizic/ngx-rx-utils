import { Injectable } from '@angular/core';
import { create } from 'rxjs-spy';
import { Spy } from 'rxjs-spy/spy-interface';

import { SubscriptionBase } from '../base';

@Injectable({
  providedIn: 'root'
})
export class RxUtils extends SubscriptionBase {

  public readonly spy: Spy = create();

  constructor() {
    super();
  }
}
