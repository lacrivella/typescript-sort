import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([12, 6, -40, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('hjfdkasDSLBLxc');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(600);
linkedList.add(-20);
linkedList.add(42);
linkedList.add(-8);

linkedList.sort();
linkedList.print();
