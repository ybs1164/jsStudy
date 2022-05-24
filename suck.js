
const array_plus_array = [] + []; // ""

const array_plus_object = [] + {}; // [object Object]
const object_plus_array = {} + []; // 0

const object_plus_object = {} + {}; // NaN

const map_parseInt = ['1', '2', '3'].map(parseInt); // [1, NaN, NaN]


