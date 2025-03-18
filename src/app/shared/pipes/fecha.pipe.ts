
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha',
  standalone: false,
})
export class FechaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const fecha = new Date(value);
    return fecha.toLocaleDateString();
  }

}

