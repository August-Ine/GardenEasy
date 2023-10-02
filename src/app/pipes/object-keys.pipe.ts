import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class ObjectKeysPipe implements PipeTransform {
  transform(value: object): string[] {
    if (!value) return [];
    return Object.keys(value);
  }
}
