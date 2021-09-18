import React from "react";
import { createUseStyles } from "react-jss";
import { Calendar } from "./Calendar";
import { Button } from "./Button";
import clsx from "clsx";
import {
  useRecoilValue,
} from "recoil";
import {
  LNBStateParams
} from "../../states/NavState/atom";

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const isShowLNB = useRecoilValue(LNBStateParams);

  return (
    <aside className={clsx(classes.sidebar, isShowLNB && "active")}>
      <Calendar />
    </aside>
  )
}

const useStyles = createUseStyles(() => ({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: "6rem",
    width: "25.2rem",
    height: "calc(100% - 6rem)",
    boxShadow: "0 5px 5px 0 #EBEBEB",
    padding: 10,
    boxSizing: "border-box",
    backgroundColor: "#FFF",
    zIndex: 9998,
    transform: "translateX(0rem)",
    transition: "transform ease 0.3s",
    "&.active": {
      transform: "translateX(-25.2rem)"
    }
  }
}))

export { Sidebar }