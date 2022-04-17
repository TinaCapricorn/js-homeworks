// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  max = arr[0];
  for (i = 1; i < arr.length; ++i) {
      if (arr[i] > max) max = arr[i];
  }
  min = arr[0];
  for (i = 1; i < arr.length; ++i) {
      if (arr[i] < min) min = arr[i];
  }
  sum = 0;
  for(var i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(var i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for(var i = 1; i < arrOfArr.length; i++){
    sum = func(arrOfArr[i]);
    if (sum > max) max = sum;
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0],
      min = arr[0];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return Math.abs(max - min);
}