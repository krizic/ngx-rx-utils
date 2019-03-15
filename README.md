# NgxRxUtils

[![Build status](https://draven88.visualstudio.com/ngx-rx-utils/_apis/build/status/ngx-rx-utils-Node.js%20With%20gulp-CI)](https://draven88.visualstudio.com/ngx-rx-utils/_build/latest?definitionId=5)

## What is this?

Small angular library meant to take control of observables and track your subscriptions

## Why might you need it

Common problem of working with RxJS is debugging and proper tracking, which causes lot of aplications end up in poorly preforming state. By using abstract classes and providers from this library your angular aplication will provide better way to track all your subscribtions and debugg your complex observables.

This library will not only take advantage of rxjs-spy by bring its goods into the angular context, but also provide you with usefull abstract classes which will help you clean up subscribtions and tag track observables.

## Install

Install using NPM:

```
npm install ngx-rx-utils --save
```

## Import

Import it like any other npm library and register it in your AppModule (root)

```js
import { NgxRxUtilsModule } from 'ngx-rx-utils';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxRxUtilsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Use

Extend any component that might be subscribing to an observabble like this:

```js
@Component({
  // ...
})
export class Sample1Component extends SubscriptionComponentBase {
  testObservable: Observable<number> = interval(1000);

  constructor() {
    super();

    this.subscribeTo(this.testObservable, 'my-observable', (num: number) => {});
  }
}
```

notice that there is `this.subscribeTo` function. It does 2 things. It will TAG provided observable with a string for tracking and it will also unsubscribe all subscriptions made in this component at the end of its lifecycle (`ngOnDestroy`)

```js
subscribeTo(
  observable: Observable<any>,
  tagName: string,
  cb: (...args: any[]) => void
  ): void
```

if you already have `ngOnDestroy` defined, you can use it just make sure that at the end you call for a `super.ngOnDestroy()` like shown below

```js
ngOnDestroy(): void {
  /// your code
  super.ngOnDestroy()
}
```

Or you if your architecture allow you could take a neater approach of tagging your observables on their very creation.

```js
@Injectable({
  providedIn: 'root',
})
export class Sample1Service {
  readonly inter2 = interval(1500)
  .pipe(tag('my-interval-2'));
}
```


## Benefit

Now when your observables are nicely taged, lets se how can we take advantaga of that.

By simply injecting another provider to your service or component you will be able to track each of observables you created. 

```js
import { RxUtils } from 'ngx-rx-utils';

@Component({
  // ...
})
export class Sample1Component extends SubscriptionComponentBase implements OnInit {

  constructor(private rxUtils: RxUtils) {
    super();
  }
}
```

### `.show`

Will show you all known observables with provided tag name and all its subscribtions

```js
@Component({
  // ...
})
export class Sample1Component extends SubscriptionComponentBase implements OnInit {
  testObservable: Observable<number> = interval(1000);

  constructor(private rxUtils: RxUtils) {
    super();
  }

  ngOnInit() {
    this.subscribeTo(this.testObservable, 'lib-sample1.MyInternal', (num: number) => {});

    this.rxUtils.show('lib-sample1.MyInternal');
  }
}
```
console output: 

```java
1 snapshot(s) matching /.+/
  Tag = lib-sample1.MyInternal
    Path = /observable/tag
      1 subscriber(s)
        Subscriber
          Value count = 0
          State = incomplete
          Root subscribe (4) [StackFrame, StackFrame, StackFrame, StackFrame]
```

### `.log`

Will log live al responces of observable matching tag name

```js
@Component({
  // ...
})
export class Sample1Component extends SubscriptionComponentBase implements OnInit {
  testObservable: Observable<number> = interval(1000);

  constructor(private rxUtils: RxUtils) {
    super();
  }

  ngOnInit() {
    this.subscribeTo(this.testObservable, 'lib-sample1.MyInternal', (num: number) => {});

    this.rxUtils.log('lib-sample1.MyInternal');
  }
}
```

console output

```
Tag = lib-sample1.MyInternal; notification = next; matching /.+/; value = 0
Tag = lib-sample1.MyInternal; notification = next; matching /.+/; value = 1
Tag = lib-sample1.MyInternal; notification = next; matching /.+/; value = 2
Tag = lib-sample1.MyInternal; notification = next; matching /.+/; value = 3
Tag = lib-sample1.MyInternal; notification = next; matching /.+/; value = 4
Tag = lib-sample1.MyInternal; notification = next; matching /.+/; value = 5
```
