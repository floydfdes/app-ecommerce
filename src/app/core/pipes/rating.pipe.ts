import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(value: number): any {
    const arr = [...Array(+value.toPrecision(1)).keys()].map((x) => '*');
    console.log(arr.join(''));
    return arr.join('');
  }
}
