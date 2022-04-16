function solveEquation(a, b, c) {
  'use strict';
  let dis = Math.pow(b, 2) - (4 * a * c);
  if (dis < 0) {
      return [];
  }
  if (dis == 0) {
      return [
          -b / (2 * a)
      ];
  }
  if (dis > 0) {
      return [
          (-b + Math.sqrt(dis)) / (2 * a),
          (-b - Math.sqrt(dis)) / (2 * a)
      ];
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
