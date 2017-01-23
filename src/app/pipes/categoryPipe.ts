import {Pipe,PipeTransform} from '@angular/core';

@Pipe({ // Category pipe is used filtering categories
    name: 'filterPipe'
})


export class categoryPipe implements PipeTransform {

transform(items: any[], args:number):any[] {
		if (!items) return;
		let result = items.filter(
			item => {
					
				    return item.category == args

					}
		)
       
       return result 

}
}