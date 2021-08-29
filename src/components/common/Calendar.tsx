import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const Calendar: React.FC = () => {
  const classes = useStyles();



  useEffect(() => {
    let row: number = 5;
    let column: number = 7;
    // Calculate the days of month;
    // This is not perfect
    const twoDimensionArr = new Array();
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    let day: number = 30;
    if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
      if (month === 2) {
        day = 29;
      }
      if (month > 8 && month % 2 === 1) {
        day = 31;
      }
      if (month <= 8 && month % 2 === 0) {
        day = 31;
      }
    }

    const startWeek: number = 0;
    let date: number = 0;

    for (let i = 0; i < row; i++) {
      if (row === i) {
        return;
      }
      for (let j = 0; j < 7; j++) {
        twoDimensionArr.push(date);
        date++;
      }
    }
    console.log(twoDimensionArr);
  }, []);

  return (
    <div className={classes.calendar}>
      <div>

      </div>
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  calendar: {
    width: "100%",
    overflow: "auto",
  }
}))

export { Calendar }