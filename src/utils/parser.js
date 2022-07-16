import moment from "moment";

export const dateParser = (date, format = "DD MMMM YYYY") => {
  return moment(date).format(format);
};
