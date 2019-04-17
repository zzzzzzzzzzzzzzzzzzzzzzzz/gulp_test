import {add ,mul} from './module1'
import {name,age} from './module2'
import Person from './module3'


console.log(add(3, 4));
console.log(mul(3, 4));


const p =  new Person(name,age)
console.log(p);