import dayjs from "dayjs";

// export const getNumberOfWeeksBetweenTwoDates = (startDate, endDate) => {
//   const msInWeek = 1000 * 60 * 60 * 24 * 7;

//   return Math.round(Math.abs(endDate - startDate) / msInWeek);
// };

const getDatesWithinDateRange = (dateStart, dateEnd) => {
  var currentDate = dateStart,
    dates = [];
  while (currentDate <= dateEnd) {
    // append date to array
    dates.push(currentDate);

    // add one day
    // automatically rolling over to next month
    var d = new Date(currentDate.valueOf());
    d.setDate(d.getDate() + 1);
    currentDate = d;
  }
  return formatDatesWithinDateRange(dates);
};

const formatDatesWithinDateRange = (selectedDateRange) => {
  const weekdaysOfDatesWithinRange = selectedDateRange.map((d) =>
    dayjs(d).format("ddd")
  );
  const datesOfDatesWithinRange = selectedDateRange.map((d) =>
    dayjs(d).format("DD-MMM")
  );
  return { weekdaysOfDatesWithinRange, datesOfDatesWithinRange };
};
