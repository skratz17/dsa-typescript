export const maxArea = (heights: number[]): number => {
  let start = 0;
  let end = heights.length - 1;
  let maxArea = 0;

  while(start < end) {
    const minHeight = Math.min(heights[start], heights[end]);
    const currArea = (end - start) * minHeight;
    if(currArea > maxArea) maxArea = currArea;

    if(minHeight === heights[start]) {
      start++;
    }
    else {
      end--;
    }
  }

  return maxArea;
};