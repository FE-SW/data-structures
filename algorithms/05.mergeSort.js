function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;
  
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
  
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }
  
  function mergeSort(arr) {
    if (arr.length < 2) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Sorted array: " + mergeSort(array));
  