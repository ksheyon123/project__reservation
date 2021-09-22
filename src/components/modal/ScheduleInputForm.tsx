import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { ScheduleInputContext } from "../../contexts/ScheduleInputContext";
import { ThemeType } from "../../styles/theme";
import clock_icon from "../../assets/clock_icon.png";
import {
  Input
} from "../common/index";

const ScheduleInputForm: React.FC = () => {
  const classes = useStyles();
  const { isScheduleInputOpended, clickedPosition } = React.useContext(
    ScheduleInputContext
  );
  useEffect(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, []);

  return ReactDOM.createPortal(
    <div className={clsx(classes.modal, isScheduleInputOpended && "active")} style={{
      left: clickedPosition.x,
      top: clickedPosition.y
    }}>
      <div className={classes.header}>

      </div>
      <div className={classes.content}>
        <div style={{
          marginLeft: "50px",
          background: `url(${clock_icon}) center left 20px no-repeat`,
          backgroundSize: "22px 22px"

        }}>
          <Input text={""} type={"text"} placeholder={"Title"} />
        </div>
        <div style={{
          marginLeft: "50px",
          backgroundImage: `url(${clock_icon}) center left 10px no-repeat`,

        }}>
          <Input text={""} type={"text"} placeholder={"Title"} />
        </div>
        <div style={{
          marginLeft: "50px",
          backgroundImage: `url(${clock_icon}) center left 10px no-repeat`,

        }}>
          <Input text={""} type={"text"} placeholder={"Title"} />
        </div>
      </div>
    </div>,
    document.querySelector("#schedule-form")!
  )
}

const useStyles = createUseStyles((theme: ThemeType) => ({
  modal: {
    display: "none",
    "&.active": {
      position: "absolute",
      display: "block",
      width: "30vw",
      height: "60vh",
      borderRadius: "8px",
      backgroundColor: theme.mono1,
      zIndex: 9999,
      boxShadow: "0px 5px 15px 0px #EBEBEB",
    }
  },
  header: {
    width: "100%",
    height: "3.6rem",
    backgroundColor: theme.hBG,
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
  },
  content: {
    width: "100%",
    height: "calc(100% - 3.6rem)"

  }
}))

export { ScheduleInputForm }