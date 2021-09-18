import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import {
  useHistory
} from "react-router-dom";
import { Input, Button } from "../components/common/index";
import clsx from "clsx";

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isShowRegister, showLogin] = useState<boolean>(false);
  const handleCover = () => {
    showLogin(!isShowRegister);
  }

  const login = () => {
    history.push("/calendar")
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <div className={classes.box}>
          <div>
            <Input text={"아이디"} type={"text"} placeholder={"아이디를 입력해주세요."} />
            <Input text={"비밀번호"} type={"password"} placeholder={"비밀번호를 입력해주세요."} />
            <Button text={"로그인"} type={"cta"} onClick={login} />
          </div>
          <div style={{
            paddingLeft: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}>
            <Input text={"아이디"} type={"text"} align="right" placeholder={"아이디를 입력해주세요."} />
            <Input text={"비밀번호"} type={"password"} align="right" placeholder={"비밀번호를 입력해주세요."} />
            <Button text={"회원가입"} type={"cta"} />
          </div>
          <div
            onClick={() => handleCover()}
            className={clsx(classes.cover, isShowRegister && "login")}
          />
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles(() => ({
  container: {
    width: "100vw",
    height: "100vh",
  },
  wrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  box: {
    position: "relative",
    padding: "2rem 3rem",
    boxShadow: "0px 3px 15px 0px #EBEBEB",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "60rem",
    height: "40rem",
    boxSizing: "border-box",
    "& > div.cover": {
      // display: "none"
    },
    "@media screen and (max-width : 800px)": {
      width: "30rem",
      height: "40rem",
      gridTemplateColumns: "1fr",
      "& > div.cover": {
        display: "none"
      }
    }
  },
  cover: {
    backgroundColor: "#000",
    height: "100%",
    width: "50%",
    position: "absolute",
    transform: "translateX(30rem)",
    transition: "transform ease 1s",
    "&.login": {
      transform: "translateX(0rem)",
      transition: "transform ease 1s",
    }
  }
}))

export { LoginPage };