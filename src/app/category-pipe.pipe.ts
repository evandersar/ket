import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let selectedCategory = args;

    return value.filter(img => {
      return img.category == selectedCategory;
    });

  }

}
