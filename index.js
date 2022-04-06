function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i<array.length; i++){
    for(let j =i+1; j<=array.length-1; j++){
      const arraySum = array[i]+array[j]
      console.log(array[i])
      console.log(array[j])
      if(arraySum===target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Big O time complexity for the function is O(n^2)
*/

/* 
  Add your pseudocode here
  Take an element in the array and add it to 
  every other element in the array including itself.
  Then compare it to the target. 
*/

/*
  Add written explanation of your solution here
  Everytime it runs through it will compare it to the target.
  If they are the same, return true.
  If not return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
