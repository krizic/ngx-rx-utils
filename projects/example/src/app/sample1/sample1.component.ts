import { Component, OnInit } from '@angular/core';
import { SubscriptionComponentBase } from 'projects/ngx-rx-utils/src/lib/base';
import { Observable, interval } from 'rxjs';
import { RxUtils } from 'projects/ngx-rx-utils/src/lib/service/rx-utils.service';
import { Sample1Service } from './sample1.service';

enum ObservableTag {
  MyInternal = 'lib-sample1.MyInternal',
}

@Component({
  selector: 'lib-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css'],
})
export class Sample1Component extends SubscriptionComponentBase implements OnInit {
  testObservable: Observable<number> = interval(1000);

  constructor(private rxUtils: RxUtils, private ss: Sample1Service) {
    super();
  }

  ngOnInit() {
    this.subscribeTo(this.testObservable, ObservableTag.MyInternal, (num: number) => {

    });

    this.subscribeTo(this.testObservable, ObservableTag.MyInternal, (num: number) => {

    });

    this.subscribeTo(this.testObservable, ObservableTag.MyInternal, (num: number) => {

    });


    this.rxUtils.spy.show();
    //this.rxUtils.spy.debug(ObservableTag.MyInternal);
    this.rxUtils.spy.log();
  }
}


