export class Sorter {
  constructor(public collection: /* TODO: fix this */) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {           
          const lefHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = lefHand;
        }
      }
    }
  }
}
