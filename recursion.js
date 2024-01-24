/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
    if (idx === nums.length) return 1;
    return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestWord=0) {
  if (idx === words.length) return longestWord;
  else if (words[idx].length > longestWord) {
    longestWord = words[idx].length;
  }
  return longest(words, idx+1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr="") {
  if (idx === str.length) return newStr;
  else if ( idx % 2 === 0 ) {
    newStr = newStr + str[idx];
  }
  return everyOther(str, idx+1, newStr);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  if (idx === str.length) return true;
  else if (str[idx] !== str[str.length-1-idx]) return false;
  return isPalindrome(str, idx+1);
}
isPalindrome("racecar");

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx === arr.length) return -1;
  else if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length-1, reversed="") {
  if (idx === 0) return reversed + str[idx];
  reversed = reversed + str[idx];
  return revString(str, idx-1, reversed);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings=[]) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

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
