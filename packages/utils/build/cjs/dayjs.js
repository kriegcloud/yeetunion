"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fAdd = fAdd;
exports.fDate = fDate;
exports.fDateRangeShortLabel = fDateRangeShortLabel;
exports.fDateTime = fDateTime;
exports.fIsAfter = fIsAfter;
exports.fIsBetween = fIsBetween;
exports.fIsSame = fIsSame;
exports.fSub = fSub;
exports.fTime = fTime;
exports.fTimestamp = fTimestamp;
exports.fToNow = fToNow;
exports.formatPatterns = void 0;
exports.today = today;
var _dayjs = _interopRequireDefault(require("dayjs"));
var _duration = _interopRequireDefault(require("dayjs/plugin/duration"));
var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// ----------------------------------------------------------------------
/**
 * @Docs
 * https://day.js.org/docs/en/display/format
 */
/**
 * Default timezones
 * https://day.js.org/docs/en/timezone/set-default-timezone#docsNav
 *
 */
/**
 * UTC
 * https://day.js.org/docs/en/plugin/utc
 * @install
 * import utc from 'dayjs/plugin/utc';
 * dayjs.extend(utc);
 * @usage
 * dayjs().utc().format()
 *
 */
_dayjs.default.extend(_duration.default);
_dayjs.default.extend(_relativeTime.default);
const formatPatterns = exports.formatPatterns = {
  dateTime: "DD MMM YYYY h:mm a",
  // 17 Apr 2022 12:00 am
  date: "DD MMM YYYY",
  // 17 Apr 2022
  time: "h:mm a",
  // 12:00 am
  split: {
    dateTime: "DD/MM/YYYY h:mm a",
    // 17/04/2022 12:00 am
    date: "DD/MM/YYYY" // 17/04/2022
  },
  paramCase: {
    dateTime: "DD-MM-YYYY h:mm a",
    // 17-04-2022 12:00 am
    date: "DD-MM-YYYY" // 17-04-2022
  }
};
const isValidDate = date => date !== null && date !== undefined && (0, _dayjs.default)(date).isValid();
// ----------------------------------------------------------------------
function today(template) {
  return (0, _dayjs.default)(new Date()).startOf("day").format(template);
}
// ----------------------------------------------------------------------
/**
 * @output 17 Apr 2022 12:00 am
 */
function fDateTime(date, template) {
  if (!isValidDate(date)) {
    return "Invalid date";
  }
  return (0, _dayjs.default)(date).format(template ?? formatPatterns.dateTime);
}
// ----------------------------------------------------------------------
/**
 * @output 17 Apr 2022
 */
function fDate(date, template) {
  if (!isValidDate(date)) {
    return "Invalid date";
  }
  return (0, _dayjs.default)(date).format(template ?? formatPatterns.date);
}
// ----------------------------------------------------------------------
/**
 * @output 12:00 am
 */
function fTime(date, template) {
  if (!isValidDate(date)) {
    return "Invalid date";
  }
  return (0, _dayjs.default)(date).format(template ?? formatPatterns.time);
}
// ----------------------------------------------------------------------
/**
 * @output 1713250100
 */
function fTimestamp(date) {
  if (!isValidDate(date)) {
    return "Invalid date";
  }
  return (0, _dayjs.default)(date).valueOf();
}
// ----------------------------------------------------------------------
/**
 * @output a few seconds, 2 years
 */
function fToNow(date) {
  if (!isValidDate(date)) {
    return "Invalid date";
  }
  return (0, _dayjs.default)(date).toNow(true);
}
// ----------------------------------------------------------------------
/**
 * @output boolean
 */
function fIsBetween(inputDate, startDate, endDate) {
  if (!isValidDate(inputDate) || !isValidDate(startDate) || !isValidDate(endDate)) {
    return false;
  }
  const formattedInputDate = fTimestamp(inputDate);
  const formattedStartDate = fTimestamp(startDate);
  const formattedEndDate = fTimestamp(endDate);
  if (formattedInputDate === "Invalid date" || formattedStartDate === "Invalid date" || formattedEndDate === "Invalid date") {
    return false;
  }
  return formattedInputDate >= formattedStartDate && formattedInputDate <= formattedEndDate;
}
// ----------------------------------------------------------------------
/**
 * @output boolean
 */
function fIsAfter(startDate, endDate) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return false;
  }
  return (0, _dayjs.default)(startDate).isAfter(endDate);
}
// ----------------------------------------------------------------------
/**
 * @output boolean
 */
function fIsSame(startDate, endDate, unitToCompare) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return false;
  }
  return (0, _dayjs.default)(startDate).isSame(endDate, unitToCompare ?? "year");
}
/**
 * @output
 * Same day: 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same year: 25 Apr - 26 May 2024
 */
function fDateRangeShortLabel(startDate, endDate, initial) {
  if (!isValidDate(startDate) || !isValidDate(endDate) || fIsAfter(startDate, endDate)) {
    return "Invalid date";
  }
  let label = `${fDate(startDate)} - ${fDate(endDate)}`;
  if (initial) {
    return label;
  }
  const isSameYear = fIsSame(startDate, endDate, "year");
  const isSameMonth = fIsSame(startDate, endDate, "month");
  const isSameDay = fIsSame(startDate, endDate, "day");
  if (isSameYear && !isSameMonth) {
    label = `${fDate(startDate, "DD MMM")} - ${fDate(endDate)}`;
  } else if (isSameYear && isSameMonth && !isSameDay) {
    label = `${fDate(startDate, "DD")} - ${fDate(endDate)}`;
  } else if (isSameYear && isSameMonth && isSameDay) {
    label = `${fDate(endDate)}`;
  }
  return label;
}
function fAdd({
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
}) {
  const result = (0, _dayjs.default)().add(_dayjs.default.duration({
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  })).format();
  return result;
}
/**
 * @output 2024-05-28T05:55:31+00:00
 */
function fSub({
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
}) {
  return (0, _dayjs.default)().subtract(_dayjs.default.duration({
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  })).format();
}
//# sourceMappingURL=dayjs.js.map