import moment from "moment";

export function getFormateDate(date, formate) {
  return moment(date).format(formate);
}

export function getCurrentDate(formate) {
  return moment(new Date()).format(formate);
}
