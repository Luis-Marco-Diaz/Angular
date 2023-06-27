import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(imageUrl: string): string {
    if (!imageUrl || imageUrl.trim() === '') {
      return '../../assets/images/default-image.jpg';
    }
    return imageUrl;
  }
}
