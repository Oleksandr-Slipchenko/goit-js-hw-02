const getItemsString = function (array) {
  'use strict';
  // Write code under this line
  const getItemsString = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
  const result = 0;
  for (i = 0, i < getItemsString.lenth, i += 1) {
    getItemsString[i] += '1-';
  }
  console.log(getItemsString[i]());
};

//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/