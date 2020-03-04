import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTableSort'
})
export class TableSortPipe implements PipeTransform {

  public transform(value: object[], field: string, direction: boolean): object[] {
    if (typeof field !== 'string') {
      return value;
    }
    if (!(value[0])) {
      return value;
    }

    const digit: number = direction ? 1 : -1;
    return [...value].sort((a, b) => {
      if (a[field] === undefined && b[field] !== undefined) {
        return 1;
      }
      if (a[field] !== undefined && b[field] === undefined) {
        return -1;
      }
      return ((a[field] > b[field]) ? 1 : -1) * digit;
    });
  }

}
