import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import {
  getCurrentWeek
} from "../../utils/index";
const DaysOfWeek: React.FC = () => {
  const classes = useStyles();
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [weeks, setWeeks] = useState<number[]>([]);

  useEffect(() => {
    const t = getCurrentWeek();
    setWeeks(t);
  }, []);

  return (
    <div className={classes.week}>
      <div className={classes.flex}>
        <div className="week__empty">
        </div>
        <div className="week__gap">
        </div>
        <div className="week__grid">
          {
            weeks.map((el, idx) => {
              return (
                <div style={{
                  padding: 10,
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}>
                  <div>
                    {week[idx]}
                  </div>
                  <div style={{
                    margin: 0,
                    padding: 10,
                  }}>
                    {el}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div
        className={clsx(classes.flex)} style={{ height: 20 }}>
        <div className="week__summary">
        </div>
        <div className="week__gap">
        </div>
        <div className="week__summary__grid">
          <div className={"active"}></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  week: {
    width: "100%",
  },
  flex: {
    display: "flex",
    "& > div.week__empty": {
      width: 48,
      minWidth: 48,
      height: 108
    },
    "& > div.week__gap": {
      width: 10,
      minWidth: 10,
      borderRight: "1px solid #EBEBEB",
    },
    "& > div.week__summary": {
      width: 48,
      minWidth: 48,

    },
    "& > div.week__grid": {
      display: "grid",
      width: "calc(100% - 48px)",
      minWidth: "1000px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      "& > div.active": {
        backgroundColor: "red"
      }
    },
    "& > div.week__summary__grid": {
      display: "grid",
      width: "calc(100% - 48px)",
      minWidth: "1000px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      "& > div": {
        borderRight: "1px solid #EBEBEB"
      },
      "& > div.active": {
        backgroundColor: "red"
      }
    }
  },

}))

export { DaysOfWeek }