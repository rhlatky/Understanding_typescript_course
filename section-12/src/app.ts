import _ from 'lodash';
import { Product } from './product.model';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator';
// declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));
// console.log(GLOBAL);

const products = [
	{
		title: 'Carpet',
		price: 29.99
	},
	{
		title: 'Book',
		price: 10.99
	}
];

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
	if (errors.length > 0) {
		console.log('VALIDATION ERRORS');
		console.log(errors);
	}
});
console.log(newProd.getInformation());

// const loadedProducts = products.map(prod => new Product(prod.title, prod.price));
const loadedProducts = plainToClass(Product, products);

for(const prod of loadedProducts) {
	console.log(prod.getInformation());
}

