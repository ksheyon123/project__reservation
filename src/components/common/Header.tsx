import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <nav></nav>
    </header>
  )
}

const useStyles = createUseStyles(() => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "6rem",
    boxShadow: "0 0 10px 0 #EBEBEB",
    backgroundColor: "#FFF",
    zIndex: 9999,
  }
}))

export { Header }