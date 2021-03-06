import theme from "../styles/theme";

const ROUTE = {
  LOGIN: "/login",
  CALENDER: "/calendar"
}

const DAILY_SCHEDULE = [
  {
    timestamp: new Date("2021/09/08 15:37").valueOf(),
    title: "First Text",
    content: "Content",
    color: theme.sage
  },
  {
    timestamp: new Date("2021/09/08 15:30").valueOf(),
    title: "First2 Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/08 22:22").valueOf(),
    title: "Second Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/08 17:40").valueOf(),
    title: "Third Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/09 07:59").valueOf(),
    title: "Fourth Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/09 13:45").valueOf(),
    title: "Fourth Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/09 21:11").valueOf(),
    title: "Fourth Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/09 12:55").valueOf(),
    title: "Fourth Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/11 19:00").valueOf(),
    title: "Fourth Text",
    content: "Content",
    color: theme.lavender
  },
  {
    timestamp: new Date("2021/09/14 16:32").valueOf(),
    title: "Fourth Text",
    content: "Content",
    color: theme.lavender
  },
]

const WEEK_SCHDULE = [
  {
    startTimestamp: new Date("2021/09/10").valueOf(),
    endTimestamp: new Date("2021/09/12").valueOf(),
    title: "WEEK SCHEDULE1",
    color: theme.banana
  },
  {
    startTimestamp: new Date("2021/09/08").valueOf(),
    endTimestamp: new Date("2021/09/09").valueOf(),
    title: "WEEK SCHEDULE2",
    color: theme.flamingo
  },
  {
    startTimestamp: new Date("2021/09/04").valueOf(),
    endTimestamp: new Date("2021/09/08").valueOf(),
    title: "WEEK SCHEDULE3",
    color: theme.sage
  },
]
interface Colors {
  [key: string]: string
}
const COLORS: Colors[] = [
  { tomato: "#c3291c" },
  { flamingo: "#d88177" },
  { tangerine: "#e25c33" },
  { banana: "#edc04b" },
  { sage: "#5db27e" },
  { basil: "#397d49" },
  { peacock: "#449adf" },
  { blueberry: "#4252af" },
  { lavender: "#7b87c6" },
  { grape: "#8331a4" },
  { graphite: "#616161" },
]

export {
  ROUTE,
  DAILY_SCHEDULE,
  WEEK_SCHDULE,
  COLORS
}