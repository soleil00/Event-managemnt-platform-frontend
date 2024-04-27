import { DateTimeFormatOptions } from "intl";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [month, day, year] = formattedDate.split(" ");

  return {
    month,
    date: parseInt(day),
    year: parseInt(year),
  };
};
