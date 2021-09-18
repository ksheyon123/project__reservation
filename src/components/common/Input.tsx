import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { ThemeType } from "../../styles/theme";

interface Props {
  text: string;
  type: "text" | "password";
  float?: "right" | "left";
  placeholder?: string;
  error?: string;
  align?: string;
}

const Input: React.FC<Props> = (props) => {
  const {
    text,
    type = "text",
    placeholder,
    error,
    align = null
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <div className={clsx(classes.input, !!align && align)}>
        <div className={clsx("text", align)}>
          {text}
        </div>
        <input className={clsx("", align)} type={type} placeholder={placeholder} />
      </div>
      <div className={classes.error}>{error}</div>
    </div>
  )
}

const useStyles = createUseStyles((theme: ThemeType) => ({
  wrap: {
    marginBottom: 20,
  },
  input: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "&.flex": {
      display: "flex",
    },
    "& > div.text": {
      ...theme.b3,
      color: theme.mono5,
      marginRight: 10,
      "&.right": {
        textAlign: "right"
      }
    },
    "& > input": {
      border: "none",
      width: "16rem",
      height: "3rem",
      paddingLeft: 1,
      borderBottom: "1px solid #EBEBEB",
      "&.right": {
        textAlign: "right"
      }
    }
  },
  error: {
    ...theme.h4,
    position: "absolute",
    color: theme.danger,
  }
}))

export { Input };