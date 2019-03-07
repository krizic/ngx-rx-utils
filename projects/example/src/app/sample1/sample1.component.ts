import { Component, OnInit } from '@angular/core';
import { SubscriptionComponentBase } from 'projects/ngx-rx-utils/src/lib/base';
import { Observable, interval } from 'rxjs';

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

  constructor() {
    super();
  }

  ngOnInit() {
    this.subscribeTo(this.testObservable, ObservableTag.MyInternal, (num: number) => {

    });

    this.subscribeTo(this.testObservable, ObservableTag.MyInternal, (num: number) => {

    });

    this.subscribeTo(this.testObservable, ObservableTag.MyInternal, (num: number) => {

    });


    //this.observerSpy.show(ObservableTag.MyInternal);
    //this.observerSpy.debug(ObservableTag.MyInternal);
    //this.observerSpy.log(ObservableTag.MyInternal);
  }
}


