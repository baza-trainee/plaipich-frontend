const arrayOfMonth = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

const arrayOfMonthEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = ({
  date,
  lng,
}: {
  date: Date;
  lng: string;
}): string => {
  let dateString = `${new Date(date).getDate()} `;
  if (lng === "en") {
    dateString = dateString + `${arrayOfMonthEn[new Date(date).getMonth()]}`;
  } else {
    dateString = dateString + `${arrayOfMonth[new Date(date).getMonth()]}`;
  }
  return dateString;
};
