import React from "react";
import { createUseStyles } from "react-jss";
import { ThemeType } from "../../styles/theme";
import clsx from "clsx";

interface Props {
  text: string;
  type: "cta" | "ghost";
  disabled?: boolean;
  error?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const {
    text,
    type,
    disabled = false,
    error,
    onClick
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <button disabled={disabled} className={clsx(classes.btn, type)} onClick={onClick}>{text}</button>
      <div className={classes.error}>
        {error}
      </div>
    </div>
  )
}

const useStyles = createUseStyles((theme: ThemeType) => ({
  wrap: {
    marginBottom: "2rem",
  },
  btn: {
    borderRadius: 6,
    "&.cta": {
      width: "13.2rem",
      padding: "8px 13px",
      border: "none",
      backgroundColor: theme.softblue,
      color: theme.mono1,
      "&:disabled": {
        color: theme.mono5,
        backgroundColor: theme.mono3Bg,
      }
    },
    "&.ghost": {
      width: "13.2rem",
      padding: "8px 13px",
      border: `1px solid ${theme.deepblue}`,
      color: theme.softblue,
      backgroundColor: theme.mono1,
      "&:disabled": {
        color: theme.mono5,
        border: `1px solid ${theme.mono3Divider}`,
      }
    },
  },
  error: {
    ...theme.h4,
    position: "absolute",
    color: theme.danger,
  }
}))

export { Button };