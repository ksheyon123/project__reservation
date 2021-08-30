import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import {
  getDayOfStartWeekOnMonth,
  getDaysOfMonth,
  getWeekOfMonth
} from "../../utils/index";

const Calendar: React.FC = () => {
  const classes = useStyles();
  const dayOfWeek: number = getDayOfStartWeekOnMonth();
  const daysOfMonth: number = getDaysOfMonth();
  const weeks = getWeekOfMonth();
  let daysOfMonthArr = new Array();

  useEffect(() => {
    console.log("dayOfWeek", dayOfWeek)
    // How to Calculate number of rows in a month;
    let firstRow = 7 - dayOfWeek;
    console.log("firstRow", firstRow)
    let left = (daysOfMonth - firstRow) % 7;
    let totalRow = left + 1;
    console.log("totalRow", totalRow)

    let date: number = 1;
    for (let i = 0; i < daysOfMonth; i++) {
      const rowArr = [];


      if (i >= dayOfWeek) {
        rowArr.push(date)
      }
      if (i < dayOfWeek) {
        rowArr.push("-")
      }

      date++;
    }
  }, []);

  const ComponentJSX = () => {
    return
  }

  return (
    <div className={classes.calendar}>
      <div>
        {
          weeks
            .filter((w) => !!w.length)
            .map((w, idx) => {
              if (idx === 0 && w.length !== 7) {
                const left = 7 - w.length;
                for (let i = 0; i < left; i++) {
                  w.unshift(null)
                }
              }
              {
                return (
                  <div style={{
                    display: "flex"
                  }}>
                    {
                      w.map((date) => {
                        return (
                          <div style={{
                            width: 40,
                            height: 40,
                            border: "1px solid #EBEBEB"
                          }}>
                            {date}
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }
            })
        }
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