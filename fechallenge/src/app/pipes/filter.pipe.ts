import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // Items: Source Array
  // Value: string //It can be variable or anything. For variable without signle quote.
  // Fields: 'Name' or 'Email'
  // Eg: <div *ngFor="let x of Array | filter: 'searchable string or variable': 'name'">
  transform(items: any[], value: string, field: string): any[] {
    // tslint:disable-next-line:curly
    if (!items) return [];
    // tslint:disable-next-line:curly
    if (!value || value.length === 0) return items;
    if (typeof (field) !== 'undefined' && field !== '') {
      return items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) != -1);
    } else {
      return items.filter(it => (JSON.stringify(it)).toLowerCase().indexOf(value.toLowerCase()) != -1);
    }
  }

}