export const getDayDateTime = (dateString) => {
  const newData = new Date(dateString);
  let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  const date = new Intl.DateTimeFormat("en-GB", options)
    .format(newData)
    .split(",");

  return date[0] + ", " + date[1] + " •" + date[2].toUpperCase() + " IST";
};
