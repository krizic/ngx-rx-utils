import { Injectable } from '@angular/core';
import { SubscriptionBase } from 'projects/ngx-rx-utils/src/lib/base';
import { RxUtils } from 'projects/ngx-rx-utils/src/lib/service/rx-utils.service';
import { interval } from 'rxjs';

enum ObservableTag {
  OtherInterval = 'Sample1Service.otherInterval',
}

@Injectable({
  providedIn: 'root',
})
export class Sample1Service extends SubscriptionBase {
  readonly inter2 = interval(1500);

  constructor(private rxUtils: RxUtils) {
    super();

    this.inter2.subscribe();
  }
}
