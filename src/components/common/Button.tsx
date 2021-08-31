import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

interface Props {
  type?: string;
  msg?: string;
}

const Button: React.FC<Props> = (props) => {
  const {
    type = "",
    msg = ""
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <div className={clsx(classes.outline, type)}>
        Create
      </div>
      <div>
        {msg}
      </div>
    </div>

  )
}

const useStyles = createUseStyles(() => ({
  button: {
    marginBottom: 15,
  },
  outline: {
    textAlign: "center",
    lineHeight: "48px",
    width: "125px",
    height: "48px",
    borderRadius: "24px",
    boxShadow: "1px 1px 5px 1px #EBEBEB",
    "&.round": {
      borderRadius: "50%",
    }
  }
}))

export { Button }