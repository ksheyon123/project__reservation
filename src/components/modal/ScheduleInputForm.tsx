import React from "react";
import ReactDOM from "react-dom";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { ScheduleInputContext } from "../../contexts/ScheduleInputContext";
import { ThemeType } from "../../styles/theme";

const ScheduleInputForm: React.FC = () => {
  const classes = useStyles();
  const { isScheduleInputOpended, clickedPosition } = React.useContext(
    ScheduleInputContext
  );
  console.log(isScheduleInputOpended)
  return ReactDOM.createPortal(
    <div className={clsx(classes.modal, isScheduleInputOpended && "active")} style={{
      left: clickedPosition.x,
      top: clickedPosition.y
    }}>
      asdfasdf
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
      borderRadius: "2rem",
      backgroundColor: theme.mono1,
      zIndex: 9999,
      boxShadow: "0px 5px 15px 0px #EBEBEB",
    }
  }
}))

export { ScheduleInputForm }