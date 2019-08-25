import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'upper',
})
export class UpperPipe implements PipeTransform {
  transform(value: string, _: any[]): any {
    return value.toUpperCase()
  }
}
