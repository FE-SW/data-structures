function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let value = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > value) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = value;
    }
    return arr;
  }
  
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Sorted array: " + insertionSort(array));
  