import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class productService { // HTTP Service for fetching data from Json file or can be used for Backend.
	constructor(private http:Http){

	}

	getAllProducts(url){

		return this.http.get(url).map(
			(res) => res.json()

			);
	}
}