import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let colleguesFilter = [];

    value.forEach(co => {
      if(co.nom.toLowerCase().startsWith(args.toLowerCase())){
        colleguesFilter.push(co);
      }
      value = colleguesFilter;
    });

    return value;

  }

}
