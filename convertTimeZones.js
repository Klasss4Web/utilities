const changeTimezone = (date, timeZoneString) => {
  // suppose the date is 12:00 UTC
  const invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: timeZoneString,
    })
  );

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff); // needs to substract
}

// E.g.
var here = new Date("2012/04/20 10:10:30");
var there = changeTimezone(here, "America/Toronto");

console.log(`Here: ${here.toString()}\nToronto: ${there.toString()}`);




function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

// usage: Asia/Jakarta is GMT+7
convertTZ("2012/04/20 10:10:30 +0000", "Asia/Jakarta"); // Tue Apr 20 2012 17:10:30 GMT+0700 (Western Indonesia Time)

// Resulting value is regular Date() object
const convertedDate = convertTZ("2012/04/20 10:10:30", "Asia/Jakarta");
convertedDate.getHours(); // 17

// Bonus: You can also put Date object to first arg
const date = new Date();
console.log(convertTZ("2012/04/20 10:10:30 +0000", "Asia/Jakarta"), "locale"); // current date-time in jakarta.

const lagos = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
const newYork = new Date().toLocaleString("en-US", {
  timeZone: "America/New_York",
});

console.log(lagos, "local");
