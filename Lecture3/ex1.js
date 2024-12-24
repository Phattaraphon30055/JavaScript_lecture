let values1=[ 'Apple', 1  , false ];
let values2=[ 'Apple', 2  , true ];
let values3=[ 'Mars', 9  , 'Apple' ];

const commonElements = values1.filter(value => values2.includes(value) && values3.includes(value));

console.log( commonElements);

