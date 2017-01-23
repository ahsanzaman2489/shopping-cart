/**
 * Created by ahsan.zaman on 1/21/2017.
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({// Filter pipe is used Search Filter when user type it will fetch use the data 
  name: "search"
})

export class FilterByPipe {

  transform(items, string: string) {

    if (string == '' || string == null) {
      return items;
    }
    return items.filter((item) => item.brand_name.includes(string));
  }
}
