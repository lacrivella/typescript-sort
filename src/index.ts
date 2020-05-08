import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([12, 6, -40, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('hjfdkasDSLBLxc');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
