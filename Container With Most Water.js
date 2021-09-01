/* Leetcode - 11. Container With Most Water [Med] */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let largestArea = 0;
  const n = height.length;

  if (n == 2) {
    largestArea = height[0] < height[1] ? height[0] : height[1];
  } else {
    let width = n - 1;
    let i = 0;
    j = n - 1;

    while (i < n || j > 0) {
      if (height[i] <= height[j]) {
        if (height[i] * width > largestArea) largestArea = height[i] * width;
        i++;
        width--;
      } else {
        if (height[j] * width > largestArea) largestArea = height[j] * width;
        j--;
        width--;
      }
    }
  }

  return largestArea;
};
