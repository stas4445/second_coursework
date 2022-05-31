import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'moments'
})
export class MomentsPipe implements PipeTransform {
  transform(m: moment.Moment, format: string = 'ddd DD'): string {
    return m.format(format)
  }
}