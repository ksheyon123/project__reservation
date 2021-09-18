import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import {
  useRecoilValue,
} from "recoil";
import {
  LNBStateParams
} from "../../states/NavState/atom";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();
  const isShowLNB = useRecoilValue(LNBStateParams);

  return (
    <>
      <Header />
      <Sidebar />
      <main className={clsx(classes.main, isShowLNB && "active")}>
        {children}
      </main>
    </>
  )
}

const useStyles = createUseStyles(() => ({
  main: {
    position: "relative",
    top: 0,
    left: 0,
    marginTop: "6rem",
    marginLeft: "25.2rem",
    width: "calc(100% - 25.2rem)",
    height: "calc(100% - 6rem)",
    transition: "margin ease 0.3s",
    overflow: "scroll",
    "&.active": {
      marginLeft: "0",
      width: "100%",
    }
  }
}))

export { MainLayout }