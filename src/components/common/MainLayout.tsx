import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import { Header } from "./Header";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>
        {children}
      </main>
    </>
  )
}

const useStyles = createUseStyles(() => ({
  main: {
    marginTop: "6rem",
    width: "100%",
    height: "calc(100% - 6rem)"
  }
}))

export { MainLayout }