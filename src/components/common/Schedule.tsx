import React, { createElement, useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import {
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  weekStateParams,
  reservationStateParams,
  daysOfWeekStateParams
} from "../../states/CalendarState/atom";
import {
  reservationStateProps
} from "../../states/CalendarState/types";
import {
  DAILY_SCHEDULE
} from "../../constants/index";
import theme from "../../styles/theme";
import { ModalContext } from "../../contexts/ModalContext";

const Column: React.FC = () => {
  const classes = useStyles();
  const divRef = useRef<HTMLDivElement>(null);
  const [scheduleList, setSceduleList] = useRecoilState(reservationStateParams);
  const [daysOfWeek, setDaysOfWeek] = useRecoilState(daysOfWeekStateParams);

  const weekState = useRecoilValue(weekStateParams);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [isMounted, setisMounted] = useState<boolean>(false);
  const { handleModal } = React.useContext(ModalContext);

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
      const yPosition = Math.floor((e.clientY - divRef.current?.getBoundingClientRect().top) / 24);
      const xPosition = Math.floor(((e.clientX - divRef.current?.getBoundingClientRect().left) * 7) / ((divRef.current?.getBoundingClientRect().right - divRef.current?.getBoundingClientRect().left)));
      const { year, month, day } = daysOfWeek[xPosition];
      const half = yPosition % 2 === 0 ? "00" : "31";
      const hour = Math.floor(yPosition / 2);
      console.log(new Date(year + "/" + month + "/" + day + " " + hour + ":" + half))
      setSceduleList([
        ...scheduleList,
        {
          timestamp: new Date(year + "/" + month + "/" + day + " " + hour + ":" + half).valueOf(),
          title: "First2 Text",
          content: "Content",
          color: "#EBEBEB"
        },
      ])
    }
  }

  console.log(scheduleList)
  return (
    <div ref={divRef} className={classes.reserve__grid} onClick={(e) => handleScheduler(e)}>
      {
        daysOfWeek.map((singleWeek: any) => {
          return (
            <div id={singleWeek.day}>
              {
                scheduleList.map((comp: any) => {
                  const { day } = singleWeek;
                  const { timestamp, title, color } = comp;
                  const date = new Date(timestamp).getDate();
                  const hours = new Date(timestamp).getHours();
                  const minutes = new Date(timestamp).getMinutes();
                  if (day === date) {
                    const position = (hours + (minutes > 30 ? 0.5 : 0)) * startPosition / 24;
                    return (
                      <div
                        onClick={() => handleSchedule(comp)}
                        style={{
                          position: "absolute",
                          top: position,
                          backgroundColor: color,
                          color: theme.mono1,
                          height: 20,
                          width: "95%",
                          fontSize: 12,
                          borderRadius: 3,
                          paddingLeft: 10,
                          boxSizing: "border-box"
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

const Schedule: React.FC = () => {
  const classes = useStyles();
  const [timeArr, setTimeArr] = useState<string[]>([]);

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

export { Schedule }