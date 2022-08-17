const formatTime = (date) => {
  const newDate = new Date(date || Date.now());
  const time =
    ("0" + newDate?.getUTCHours())?.slice(-2) +
    ":" +
    ("0" + newDate?.getUTCMinutes())?.slice(-2);
  return time;
};

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "GMT",
  };
  const newDate = new Date(Date.parse(date) || Date.now());
  const formattedDate = newDate?.toLocaleString("en-US", options);
  return formattedDate;
};

console.log(formatTime())
