import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string, Default: string): string {
    if (!value) {
      return Default;
    }
    return value;
  }

}
