function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  
    return arr;
  }
  
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Sorted array: " + selectionSort(array));
  