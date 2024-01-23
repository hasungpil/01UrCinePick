const thisYear = new Date().getFullYear();
export const YearArray = [
  {
    value: thisYear,
    text: thisYear,
  },
  {
    value: thisYear - 1,
    text: thisYear - 1,
  },
  {
    value: thisYear - 2,
    text: thisYear - 2,
  },
  {
    value: thisYear - 3,
    text: thisYear - 3,
  },
  {
    value: thisYear - 4,
    text: thisYear - 4,
  },
  {
    value: "direct",
    text: "직접입력",
  },
];
export const TypeArray = [
  {
    value: "movie",
    text: "Movie",
  },
  {
    value: "series",
    text: "Series",
  },
  {
    value: "episode",
    text: "Episode",
  },
];
