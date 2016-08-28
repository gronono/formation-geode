import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'count' })
export class CountPipe implements PipeTransform {
  transform(value, args) {
    console.log(`Count ${value}`);
    return `${value} (${value.length})`;
  }
}
