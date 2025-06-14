const removeElement = function (nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const result = [0, 1, 3, 0, 4];
