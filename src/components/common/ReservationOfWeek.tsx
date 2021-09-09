import React, { createElement, useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import {
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  weekStateParams,
  // daysOfWeekStateParams,
  reservationStateParams
} from "../../states/CalendarState/atom";
import {
  reservationStateProps
} from "../../states/CalendarState/types";
import {
  DAILY_SCHEDULE
} from "../../constants/index";

const Column: React.FC = () => {
  const classes = useStyles();
  const divRef = useRef<HTMLDivElement>(null);
  const [scheduleList, setSceduleList] = useRecoilState(reservationStateParams);
  const weekState = useRecoilValue(weekStateParams);
  console.log(weekState)
  const [startPosition, setStartPosition] = useState<number>(0);
  const [isMounted, setisMounted] = useState<boolean>(false);
  const timestamp = new Date("2021/09/08 22:10").valueOf();
  const requestResevationList = () => {
    // 주간 데이터 모두 호출
    // response
  }

  useEffect(() => {
    requestResevationList();

    setSceduleList(DAILY_SCHEDULE);
    if (isMounted && divRef.current) {
      const divElement = divRef.current;
      setStartPosition(divElement.getBoundingClientRect().bottom - divElement.getBoundingClientRect().top);
      return;
    }
    setisMounted(true);
  }, [isMounted])

  const handleSchedule = (el: any) => {
    console.log(el);
  }

  const handleScheduler = (e: any) => {
    //311 by 188
    if (divRef.current?.getBoundingClientRect()) {
      console.log("right", divRef.current?.getBoundingClientRect().right)
      console.log("left", divRef.current?.getBoundingClientRect().left)

      const yPosition = Math.floor((e.clientY - divRef.current?.getBoundingClientRect().top) / 24);
      const xPosition = Math.floor((divRef.current?.getBoundingClientRect().right - e.clientX) / 7)
      console.log(yPosition);
      console.log(xPosition);
    }
  }
  return (
    <div ref={divRef} className={classes.reserve__grid} onClick={(e) => handleScheduler(e)}>

      {
        weekState.map((singleWeek: string, idx: number) => {
          return (
            <div id={singleWeek}>
              {
                scheduleList.map((comp: any) => {
                  const { timestamp, title, content } = comp;
                  const hours = new Date(timestamp).getHours();
                  const minutes = new Date(timestamp).getMinutes();
                  const week = new Date(timestamp).getDay();
                  if (idx === week) {
                    const position = (hours + (minutes > 30 ? 0.5 : 0)) * startPosition / 24;

                    return (
                      <div
                        onClick={() => handleSchedule(comp)}
                        style={{
                          position: "absolute",
                          top: position
                        }}
                      >
                        {title}
                      </div>
                    )
                  }
                })
              }
            </div>

          )
        })
      }
    </div>

  )
}

const ReservationOfWeek: React.FC = () => {
  const classes = useStyles();
  const [timeArr, setTimeArr] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement>(null);
  // const [refVisible, setRefVisible] = useState(false)
  // const [startPosition, setStartPosition] = useState<number>(0);

  // console.log("startPosition", startPosition)

  useEffect(() => {
    let newArr = new Array();
    for (let i = 0; i < 24; i++) {
      const timeString = i < 12 ? i + "am" : i === 12 ? i + "pm" : i % 12 + "pm";
      newArr.push(timeString);
    }

    setTimeArr(newArr);
  }, []);

  return (
    <div className={classes.reservation}>
      <div className={classes.flex}>
        <div className={classes.reserve__time}>
          {
            timeArr.map((el) => {
              return (
                <div className="reserve__time">
                  <div>{el}</div>
                </div>
              )
            })
          }
        </div>
        <div className={classes.reserve__gap}>
          {
            timeArr.map((_) => {
              return (
                <div className={classes.line}>
                </div>
              )
            })
          }
        </div>
        <Column />
      </div>
      <div>

      </div>
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  reservation: {

  },
  flex: {
    display: "flex",

  },
  reserve__time: {
    "& > div.reserve__time": {
      position: "relative",
      width: 48,
      minWidth: 48,
      height: 48,
      "& > div": {
        position: "absolute",
        top: "-14px",
        right: 0,
        fontSize: 8,
      }
    }
  },
  reserve__gap: {
    width: 10,
    minWidth: 10,
    borderRight: "1px solid #EBEBEB",
  },
  line: {
    height: 48,
    boxSizing: "border-box",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      borderBottom: "1px solid #EBEBEB"
    }
  },
  reserve__grid: {
    position: "relative",
    display: "grid",
    width: "calc(100% - 48px)",
    minWidth: "1000px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    " & > div": {
      position: "relative",
      borderRight: "1px solid #EBEBEB"
    }
  },
  "reserve": {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    backgroundColor: "skyblue",
    borderRadius: 6,
    margin: 2,
  }
}))

export { ReservationOfWeek }