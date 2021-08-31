import React from "react";
import { createUseStyles } from "react-jss";
import { Calendar } from "./Calendar";
// import clsx from "clsx";

const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <aside className={classes.sidebar}>

      <Calendar />
    </aside>
  )
}

const useStyles = createUseStyles(() => ({
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    marginTop: "6rem",
    width: "25.2rem",
    height: "calc(100% - 6rem)",
    boxShadow: "0 5px 5px 0 #EBEBEB",
    padding: 10,
    boxSizing: "border-box"
  }
}))

export { Sidebar }