class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      // length - i - 1 is for having the greatest number on the right
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const lefHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = lefHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 4, -12, 80]);
sorter.sort();
console.log(sorter.collection);
