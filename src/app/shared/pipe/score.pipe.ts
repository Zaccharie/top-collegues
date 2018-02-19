import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value > 0){
      return `<div class="text-success"><strong>+${value}</strong></div>`;
    }
    else if(value == 0) {
      return `<strong>${value}</strong>`;
    }
    else{
      return `<div class="text-danger"><strong>${value}</strong></div>`;
    }
  }

}
