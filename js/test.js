/**
 * @param {number[]} nums
 * @return {number}
 */
//[2,3,1,1,4]->2
var jump = function(nums) {
  let tempResult = 0;
  let step = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    step++;
    let max = nums[i];
    for (let j = 1; j <= max; j++) {
      if (i + j === len - 1) {
        return step;
      }
    }
  }
};
