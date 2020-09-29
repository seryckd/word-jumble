/*jshint node: true*/
/*jshint esversion: 6*/

import { makeCombinationIterator } from './combinations.js';
import { words } from './data/corncob.js';

export function unjumble(jumble) {

   let attempts = [];

   for (let row of makeCombinationIterator(jumble.length)) {

      let attempt = '';

      for (let c=0; c<row.length; c++) {
         attempt = attempt.concat(jumble[row[c]-1]);
      }

      if (words.includes(attempt)) {
         if (!attempts.includes(attempt)) {
            attempts.push(attempt);
         }
      }
   }

   return attempts;
}

//document.getElementById('result').innerHTML = unjumble('eno');

//document.getElementById('result').innerHTML = unjumble('het');

//unjumble('eno');
