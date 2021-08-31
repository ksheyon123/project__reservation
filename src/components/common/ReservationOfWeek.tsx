import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const ReservationOfWeek: React.FC = () => {
  const classes = useStyles();
  const [timeArr, setTimeArr] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let newArr = new Array();
    for (let i = 0; i < 24; i++) {
      const timeString = i < 12 ? i + "am" : i === 12 ? i + "pm" : i % 12 + "pm";
      newArr.push(timeString);
    }
    setTimeArr(newArr);
  }, []);

  const handleScheduler = (e: any) => {
    console.log(e);
    console.log(divRef.current?.offsetWidth);
    console.log(divRef.current?.offsetHeight);
  }

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
        <div className={classes.reserve__gap} />
        <div ref={divRef} className={classes.reserve__grid} onClick={(e) => handleScheduler(e)}>
          <div></div>
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
        top: "-12px",
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
  reserve__grid: {
    display: "grid",
    width: "calc(100% - 48px)",
    minWidth: "1000px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    " & > div": {
      borderRight: "1px solid #EBEBEB"
    }
  }
}))

export { ReservationOfWeek }