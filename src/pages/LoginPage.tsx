import React from "react";
import { createUseStyles } from "react-jss";
import {
  useHistory
} from "react-router-dom";
import clsx from "clsx";

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const login = () => {

  }

  return (
    <div className={classes.wrap}>
      <div className={classes.box}>
        <div className={classes.login}>
          <input type="text" />
          <input type="password" />
          <button onClick={() => login()}>Login</button>
        </div>
        <div className={classes.register}>
          <input type="text" />
          <input type="password" />
          <input type="password" />
        </div>
        <div className={classes.cover} />
      </div>
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  wrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    position: "relative",
    display: "flex",
    width: "60%",
    height: "70%",
    boxShadow: "0 0 10px 0 #EBEBEB"
  },
  cover: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "#000"
  },
  login: {
    width: "100%"
  },
  register: {
    width: "100%"
  }
}))

export { LoginPage }