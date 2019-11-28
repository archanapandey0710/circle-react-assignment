import _ from "lodash";

export function formateAmount(amount) {
  let TotalAmount = amount ? amount : 0;

  return TotalAmount.toFixed(
    Math.max(((TotalAmount + "").split(".")[1] || "").length, 2)
  );
}

export function formateAge(age) {
  return parseInt(age);
}

export function sortData(data, colName, sortOder) {
  let sortedList = _.sortBy(data, [colName]);

  if ([sortOder].toString() === "desc") {
    sortedList.reverse();
  }
  return sortedList;
}
