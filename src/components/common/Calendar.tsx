import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const Calendar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <header></header>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  wrap: {

  }
}))

export { Calendar }