/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sumNumbers = function (x, y) {
    if (x === y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumNumbers(10, 20));
  
/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const test50 = function (x, y) {
        return ((x === 50 || y === 50) || (x + y === 50));
    }
console.log(test50(10, 20));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const  removeCharacter = function(str, position) {
  part1 = str.substring(0, position);
  part2 = str.substring(position + 1, str.length);
  return (part1 + part2);
 }

/* 4. Create a function to find and return the largest of three given integers. */

const largestNumber = function (x, y, z) 
 {
  maxVal = 0;
  if (x > y) {
    maxVal = x;
  } else {
    maxVal = y;
  }
  if (z > maxVal) {
    maxVal = z;
  }
  return maxVal;
}

console.log(largestNumber(12,24,100))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

    const numbersRanges = function (x, y) {
        if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100))
           {
          return true;
           } 
          else 
           {
          return false;
        }
      }

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

    const repeatStringNumTimes = function (string, times) {
        if (times > 0)
          return string.repeat(times);
        else
          return "";
      }
      repeatStringNumTimes("abc", 3)

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

    const cityName = function(str) {
        if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New')))
            {
                return str;
          }
      
        return 'false';
      }

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

    const sumThree = function (nums) {
      return nums[0] + nums[1] + nums[2];
    }

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

    const contains13 = function (nums) {

        if (nums.includes(1) || nums.includes(3)){
           return true
        } 
        else
        {
           return false
        }
    }
    

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

    const is13 = function (nums) {
        if (!nums.includes(1) && !nums.includes(3)){
            return true;
        } else {
            return false;
        }
      }


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 

    const longestString = function (strArray) {
        let max = strArray[0].length;
        strArray.map(v => max = Math.max(max, v.length));
        result = strArray.filter(v => v.length == max);
        return result;
      }


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const  angleType = function(angle) {
    if(angle < 90) {
      return "Acute angle.";
    }
    if(angle === 90) {
      return "Right angle.";
    }
    if(angle < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }
  

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const getIndexLargest = function(array) {
let large = 0;
for ( let i = 1; i < array. length; i++) {
if ( array[i] > array[large] ) 
large = i;
}
return large;
}
console.log(getIndexLargest([1,2,3,4,5,6,7]))
/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const maxEven = function (array) {

    array.sort((x, y) => y - x);
  
    for (let i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */