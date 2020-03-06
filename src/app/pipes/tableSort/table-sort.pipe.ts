import { Pipe, PipeTransform } from '@angular/core';
import { ISortConfig } from 'src/app/components/subjects/subjects-table/subjects-table.component';

@Pipe({
  name: 'appTableSort'
})
export class TableSortPipe implements PipeTransform {

  public getField(a: object, path: string[]): any {
    return path.reduce((acc, field) => a ? acc[field] : undefined, a);
  }

  public transform(value: object[], sortConfig: ISortConfig): object[] {
    const path: string[] = sortConfig.sortPath;
    const direction: boolean = sortConfig.direction;

    if (!(value[0])) {
      return value;
    }

    const digit: number = direction ? 1 : -1;
    return [...value].sort((a, b) => {
      if (this.getField(a, path) === undefined && this.getField(b, path) !== undefined) {
        return 1;
      }
      if (this.getField(a, path) !== undefined && this.getField(b, path) === undefined) {
        return -1;
      }
      return ((this.getField(a, path) > this.getField(b, path)) ? 1 : -1) * digit;
    });
  }

}
