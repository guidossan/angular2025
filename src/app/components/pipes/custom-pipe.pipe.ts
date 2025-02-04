import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone:true,
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, args?: string): unknown {
    if(args === 'upper'){
      return value.toUpperCase();
    }
    else if (args === 'lower'){
      return value.toLowerCase();
    }
    return null;
  }

}
