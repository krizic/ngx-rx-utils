import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { tag } from 'rxjs-spy/operators';

enum ObservableTag {
  OtherInterval = 'Sample1Service.otherInterval',
}

@Injectable({
  providedIn: 'root',
})
export class Sample1Service {
  readonly inter2 = interval(1500)
  .pipe(tag(ObservableTag.OtherInterval));
}
