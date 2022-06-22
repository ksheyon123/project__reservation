import React from "react";
import { createUseStyles } from "react-jss";
import {
  DaysOfWeek,
  Schedule
} from "src/components/common/index";
import { schedulePageContainer } from "src/containers/index";

const CalendarPage: React.FC = () => {
  const classes = useStyles();

  const { } = schedulePageContainer();

  // Daily Screen
  // Weekly Screen
  // Monthly Screen
  // Annually Screen

  return (
    <div className={classes.wrap}>

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