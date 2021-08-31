import React, { createElement, useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";

const ReservationOfWeek: React.FC = () => {
  const classes = useStyles();
  const [timeArr, setTimeArr] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const [aaa, setAAA] = useState<number>(0);
  useEffect(() => {
    let newArr = new Array();
    for (let i = 0; i < 24; i++) {
      const timeString = i < 12 ? i + "am" : i === 12 ? i + "pm" : i % 12 + "pm";
      newArr.push(timeString);
    }
    setTimeArr(newArr);
  }, []);

  const handleScheduler = (e: any) => {
    //311 by 188
    if (divRef.current?.getBoundingClientRect()) {
      const yPosition = Math.floor((e.clientY - divRef.current?.getBoundingClientRect().top) / 24);
      console.log(yPosition * 24 + 188)
      setAAA(yPosition * 24);
      const doa = document.getElementById("a");
      const childComp = document.createElement("div");
      childComp.innerHTML = "a";
      childComp.className = "reserve"
      childComp.setAttribute("style", "top : " + yPosition * 24 + "px; position : absolute");
      doa?.appendChild(childComp)
    }
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
        <div ref={divRef} className={classes.reserve__grid} onClick={(e) => handleScheduler(e)}>
          <div id="a">
            {/* <div style={{

              top: aaa
            }}>
              a
            </div> */}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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