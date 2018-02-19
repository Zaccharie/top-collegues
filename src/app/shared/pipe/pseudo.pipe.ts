import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let colleguesFilter = [];

    colleguesFilter = value.filter(co => co.nom.toLowerCase().startsWith(args.toLowerCase()));

    return colleguesFilter;

  }

}
