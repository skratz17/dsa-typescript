export const bubbleSort = <T>(arr: T[], compare: (a: T, b: T) => number) => {
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      if(compare(arr[j], arr[j + 1]) > 0) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
};