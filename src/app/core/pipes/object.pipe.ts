import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object'
})
export class ObjectPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let object = [];
    if (typeof value == 'object') {
      for (let key in value) {
        if (value[key] == null) {
          value[key] = 'null';
        }
        object.push({ key: key, value: value[key] });
      }
    }
    return object;
  }

}
