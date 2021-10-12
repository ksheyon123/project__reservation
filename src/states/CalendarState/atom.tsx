import {
  atom,
} from 'recoil';
import {
  reservationStateProps,
  daysOfWeekStateProps
} from "./types";

const weekStateParams = atom<string[]>({
  key: "calendarPage__weekStateParams",
  default: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
});

const daysOfWeekStateParams = atom<daysOfWeekStateProps[]>({
  key: "calendarPage__daysOfWeekStateParams",
  default: []
});

const reservationListStateParams = atom<reservationStateProps[]>({
  key: "calendarPage__reservationListStateParams",
  default: []
});

const reservationStateParams = atom<reservationStateProps>({
  key: "calendarPage__reservationStateParams",
  default: {
    timestamp: 0,
    title: "",
    content: "",
    color: "",
  }
});

export {
  weekStateParams,
  daysOfWeekStateParams,
  reservationStateParams,
  reservationListStateParams,

}

