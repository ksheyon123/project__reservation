import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const Button: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.button}>

    </div>
  )
}

const useStyles = createUseStyles(() => ({
  button: {

  }
}))

export { Button }