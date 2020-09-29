/*jshint node: true*/
/*jshint esversion: 6*/


/*
 * A Generator that returns all the combinations of the given size.
 * e.g. size 2 returns 2 rows each with an array of size 2,
 * whereas size 4 returns 24 rows each with an array of size 4
 */
export function *makeCombinationIterator(size) {

   function add(fr, i1, i2) {

      let row = [];

      if (fr !== undefined) {
         for (let t=0; t<fr.length; t++) {
            row.push(fr[t]);
         }
      }

      row.push(i1);

      if (i2 !== undefined) {
         row.push(i2);
      }

      return row;
   }

   function *iterateCols(fr, idx) {

      for (let i=0; i<idx.length; i++ ) {
         let idx2 = [];

         for (let i2=0; i2<idx.length; i2++) {
            if (i2 != i)
               idx2.push(idx[i2]);
         }

         fr.push(idx[i]);

         if (idx2.length === 0) {
            yield add(undefined, idx[0]);

         } else if (idx2.length == 1) {
            yield add(fr, idx2[0]);

         } else if (idx2.length == 2) {
            yield add(fr, idx2[0], idx2[1]);
            yield add(fr, idx2[1], idx2[0]);

         } else {
            // Return the iterated values, not the iterator
            yield *iterateCols(fr, idx2);
         }

         fr.pop();
      }
   }

   if (size < 0 || size > 10) {
      throw 'Size must be between 0 and 10';
   }

   yield *iterateCols([], Array.apply(0, Array(size)).map(function(_, b) { return b + 1; }));
}

/*
for (let r of makeCombinationIterator(3)) {
   console.log(r);
}
*/
