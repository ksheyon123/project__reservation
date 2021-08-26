import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const baseTemplate: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>

    </div>
  )
}

const useStyles = createUseStyles(() => ({
  wrap: {

  }
}))

export { baseTemplate }