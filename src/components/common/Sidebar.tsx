import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>

    </div>
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
    boxShadow: "0 5px 5px 0 #EBEBEB"
  }
}))

export { Sidebar }