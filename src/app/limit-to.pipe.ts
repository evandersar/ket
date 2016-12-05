import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})

export class LimitToPipe implements PipeTransform {

  transform(value: any, arg: number): any {
    //console.log(arg);
    if (value && typeof arg == 'number'){
      return value.slice(0, arg)
    }
    else {
      return value;
    }
  }

}
