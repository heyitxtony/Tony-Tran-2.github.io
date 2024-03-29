////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  if (step === undefined) {
    step = 1;
  }
  let range = [];
  if (step > 0) {
    for(let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else {
    for(let i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let reversedArray = [];

	for (let element of array) {
		reversedArray.unshift(element);
	}

	return reversedArray;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
	for (let index = 0; index < array.length; index++) {
		let lastValue = array.pop();
		// Without removing any existing element, insert the 
        // popped out element at ith position of array.
		array.splice(index, 0, lastValue);
	}
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // create rest parameter
  let rest = null;
  // itererate backwards 
  for (let i = array.length -1; i >= 0; i--){
    // reassign rest to an object with a key of value and the value at the key is the current item in the array we are accessing.
    // additionally the object should have a key of 'rest' that is assigned the current value of rest
    rest = { value: array[i], rest: rest};
  }
  return rest;
}
arrayToList([10, 20, 30]);
/* 
value: 10,
rest: {
  value: 20, 
  { rest: 30,
    rest: null
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr=[]) {
  // base
  if (list.rest === null){
    arr.push(list.value);
    return arr;
  }
  // recursion
    // add the current values property to arr
    arr.push(list.value);
    return listToArray(list.rest, arr);

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  return listToArray(list)[number];
}
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x,y) {
      // determine if both x and y are Not objects
      if (typeof x !== 'object' && typeof y !==  'object'){
        return x === y;
    }
    // determine if Either x or y is not an object
    if (typeof x !== 'object' || typeof y !== 'object'){
        return false;
    }
    // assume both values are objects
        // make sure they have same exact keys
        //make sure the keys have the same values

    // create arrays of the keys for each value
    let xKeys = Object.keys(x);
    let yKeys = Object.keys(y);
    // deter,ome of tje ;emgtj pf tje arrays are equal
    if (xKeys.length !== yKeys.length){
        return false;
    }
    // the objects have the same number of keys
        // check if keys match
        // check if values match
    // iterate through xKeys
    for (let i = 0; i < xKeys.length; i++){
        // determine if current key is not included in yKeys or the values at that key dont match
        if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
            return false;
        }
    }
    // if you reach to this part the objects must be deeply equl
    return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
