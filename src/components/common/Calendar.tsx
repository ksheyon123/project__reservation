import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const Calendar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.calendar}>

    </div>
  )
}

const useStyles = createUseStyles(() => ({
  calendar: {

  }
}))

export { Calendar }