function quickSort(arr) {
    if (arr.length < 2) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Sorted array: " + quickSort(array));
  