export const formatDate = (userDate) => {
  const date = new Date(userDate);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const day = date.getDate();
  const year = date.getFullYear();
  return month + " " + day + ", " + year;
};
