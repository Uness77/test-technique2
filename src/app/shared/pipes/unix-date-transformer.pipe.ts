import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixDateTransformer',
  standalone: true
})
export class UnixDateTransformerPipe implements PipeTransform {

  transform(value: number): string {
    return new Date(value*1000).toLocaleTimeString('fr-FR');
  }

}
