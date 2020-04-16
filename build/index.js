"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            // length - i - 1 is for having the greatest number on the right
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var lefHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = lefHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 4, -12, 80]);
sorter.sort();
console.log(sorter.collection);
