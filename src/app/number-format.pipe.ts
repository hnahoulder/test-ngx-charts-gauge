import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'numberFrenchFormat'
})
export class NumberFrenchFormatPipe implements PipeTransform {

    transform(val: number): string {
        if (val !== undefined && val !== null) {
            return val.toLocaleString();
        } else {
            return '';
        }
    }
}
