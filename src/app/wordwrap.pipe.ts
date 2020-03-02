import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordwrap'
})
export class WordwrapPipe implements PipeTransform {

  transform(value: string, count: number): string {
    return value + count;
  }

}
