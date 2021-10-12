import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import {
  getWeek
} from "../../utils/index";
import {
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  weekStateParams,
  daysOfWeekStateParams
} from "../../states/CalendarState/atom";
import {
  WEEK_SCHDULE
} from "../../constants/index";


const DaysOfWeek: React.FC = () => {
  const classes = useStyles();
  const weekState = useRecoilValue(weekStateParams);
  const [daysOfWeek, setDaysOfWeek] = useRecoilState(daysOfWeekStateParams);

  const timestamp = new Date().valueOf();
  useEffect(() => {
    const t = getWeek(timestamp);
    setDaysOfWeek(t);
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
            daysOfWeek.map((el, idx) => {
              return (
                <div style={{
                  padding: 10,
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}>
                  <div>
                    {el.day}
                  </div>
                  <div style={{
                    margin: 0,
                    padding: 10,
                  }}>
                    {weekState[idx]}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div
        className={clsx(classes.flex)}>
        <div className="week__summary">
        </div>
        <div className="week__gap">
        </div>
        <div className="week__summary__wrap">
          {
            WEEK_SCHDULE.map((el: any) => {
              return (
                <div className="week__summary__grid">
                  {
                    daysOfWeek.map((weeks: any, idx: number) => {
                      const { day } = weeks;
                      const start = new Date(el.startTimestamp).getDate();
                      const end = new Date(el.endTimestamp).getDate();
                      if (start === day) {
                        return (
                          <div
                            className={classes.start__day}
                            style={{ backgroundColor: el.color }}
                          >
                            {el.title}
                          </div>
                        )
                      } else if (day > start && day <= end) {
                        if (idx === 0) {
                          return (
                            <div
                              className={classes.start__prevWeeks}
                              style={{
                                backgroundColor: el.color,
                              }}
                            >
                              <div
                                className="left__arrow"
                                style={{
                                  borderRight: `10px solid ${el.color}`
                                }} />
                              {el.title}
                            </div>
                          )
                        } else if (idx === 6) {
                          return (
                            <div
                              className={classes.end__nextWeeks}
                              style={{
                                backgroundColor: el.color,
                              }}
                            >
                              <div
                                className="right__arrow"
                                style={{
                                  borderLeft: `10px solid ${el.color}`,
                                }} />
                            </div>
                          )
                        } else {
                          return (
                            <div
                              className={classes.in__weeks}
                              style={{
                                backgroundColor: el.color,
                              }} />
                          )
                        }
                      } else {
                        return (
                          <div style={{ height: 20 }}></div>
                        )
                      }
                    })
                  }
                </div>
              )
            })
          }
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
    "& > div.week__summary__wrap": {
      minWidth: "1000px",
      width: "calc(100% - 48px)",
      minHeight: "20px",
    },
    "& > div.week__summary__wrap > div.week__summary__grid": {
      padding: "2px 0",
      display: "grid",
      height: "20px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      borderBottom: "1px solid #EBEBEB",
      "& > div": {
        borderRight: "1px solid #EBEBEB"
      },
      "& > div.active": {
        backgroundColor: "red"
      }
    }
  },
  start__day: {
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    color: "#fff",
    height: 20,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  start__prevWeeks: {
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    position: "relative",
    color: "#fff",
    height: 20,
    marginLeft: 10,
    "& > div.left__arrow": {
      position: "absolute",
      left: "-10px",
      width: 0,
      height: 0,
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
    }
  },
  end__nextWeeks: {
    position: "relative",
    color: "#fff",
    height: 20,
    marginRight: 10,
    "& > div.right__arrow": {
      position: "absolute",
      right: "-10px",
      width: 0,
      height: 0,
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
    }
  },
  in__weeks: {
    height: 20,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  }
}))

export { DaysOfWeek }