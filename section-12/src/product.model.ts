import {IsNotEmpty, IsPositive, IsNumber} from 'class-validator';

export class Product {
	@IsNotEmpty()
	title: string;

	@IsPositive()
	@IsNumber()
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}

	getInformation() {
		return [this.title, `$${this.price}`];
	}
}