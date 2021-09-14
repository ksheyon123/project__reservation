import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import {
  DaysOfWeek,
  Schedule
} from "../components/common/index";

const CalendarPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <DaysOfWeek />
      <Schedule />
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  wrap: {
    display: "block",
    width: "100%",
    height: "100%",
  }
}))

export { CalendarPage }