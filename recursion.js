

/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (nums.length === 0) return 1;

  return nums[0] *  product(nums.slice(1));
}


/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestWrd=0) {
  // base case
  if (idx === words.length) return longestWrd

  longestWrd = Math.max(words[idx].length, longestWrd)
  return longest(words, idx + 1, longestWrd)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr="") {
  // base case  
  if  (idx >= str.length) return  newStr;

  newStr += str[idx]
  return everyOther(str, idx + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=str.length-1, reversed="") {
  // base case 
  if (idx < 0) return str.toLowerCase() == reversed.toLowerCase();

  reversed += str[idx]
  return isPalindrome(str, idx -  1, reversed)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  // base case
  if (idx === arr.length) return -1

  if (arr[idx] === val) return idx

  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length - 1, reversed="") {
   // base case 
   if (idx < 0) return reversed;
   
  reversed += str[idx]
  return revString(str, idx - 1, reversed)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // base case
  let stringVals = [];
  for (let val in obj){
    if (typeof obj[val] === "string") {
      stringVals.push(obj[val])
    } else {
      if (typeof obj[val] === "object") {
        stringVals.push(...gatherStrings(obj[val]))
      }
    }
  }
  return stringVals;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right ) {
    return - 1;
  }
  let middle = Math.floor((left + right) / 2)
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1)
  }
  
  return binarySearch(arr, val, middle + 1, right)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};


