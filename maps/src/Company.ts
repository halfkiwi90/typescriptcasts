import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable{
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	}

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		// dot notaion 으로 기입하면 안된다. ex) this.location.lat = 30 
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `Company name: ${this.companyName}`
	}

	color:string = 'blue'
}