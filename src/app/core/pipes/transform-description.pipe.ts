import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDescription',
})
export class TransformDescriptionPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    let description = value.split(' ').slice(0, 8).join(' ');

    return description;
  }
}
