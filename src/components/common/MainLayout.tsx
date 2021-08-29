import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Sidebar />
      <main className={classes.main}>
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
    height: "calc(100% - 6rem)"
  }
}))

export { MainLayout }