import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
const map = new Map('map');
// map.googleMap은 에러가 난다 private으로 지정해주었기 때문에 

map.addMarker(user);
map.addMarker(company);

