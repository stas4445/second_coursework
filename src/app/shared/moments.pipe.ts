import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'moments',
  //pure: false
})
export class MomentsPipe implements PipeTransform {
  transform(m: moment.Moment, format: string = 'LT'): string {
    return m.format(format)
  }
}