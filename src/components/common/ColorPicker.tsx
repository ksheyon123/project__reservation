import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { ThemeType } from "../../styles/theme";
import { COLORS } from "../../constants/index";
import arrowNorUp from "../../assets/03-icon-element-arrow-4-r-nor@2x.png";
import arrowNorDown from "../../assets/03-icon-element-arrow-3-r-nor@2x.png";

interface Props {
  type: "long" | "short" | "tiny";
  onClick: (el: any) => void;
}



const ColorPicker: React.FC<Props> = (props) => {
  const {
    type = "short",
    onClick
  } = props;
  const classes = useStyles();
  const [toggleColor, toggleColorList] = useState<boolean>(false);
  const _initialname = Object.values(COLORS)[0];
  const _key: string = Object.keys(_initialname)[0];
  const [color, setColor] = useState<string>(COLORS[0][_key]);

  return (
    <div className={clsx(classes.wrap, type, toggleColor && "active")} onClick={() => toggleColorList(!toggleColor)}>
      <div
        className={clsx(classes.color__on, toggleColor && "active")}
        style={{
          backgroundColor: color
        }}
      />
      <div className={clsx(classes.colors, toggleColor && "active")}>
        {
          COLORS.map((el: any) => {
            const _name = Object.keys(el)[0] as string;
            return (
              <div
                onClick={() => {
                  onClick(el);
                  setColor(el[_name])
                }}
                style={{
                  backgroundColor: el[_name],
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem"
                }} />
            )
          })
        }
      </div>
    </div>
  )
}

const useStyles = createUseStyles((theme: ThemeType) => ({
  wrap: {
    display: "flex",
    position: "relative",
    borderRadius: 6,
    alignItems: "center",
    paddingRight: 20,
    boxSizing: "border-box",
    boxShadow: "0px 3px 15px 0px #EBEBEB",
    "&.long": {
      width: "80px",
      height: "20px",
    },
    "&.short": {
      width: "70px",
      height: "20px",
    },
    "&.tiny": {
      width: "40px",
      height: "20px",
    },
    "&.active": {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      background: `url(${arrowNorUp}) right 4px center no-repeat`,
      backgroundSize: `12px 12px`,
    },
    background: `url(${arrowNorDown}) right 4px center no-repeat`,
    backgroundSize: `12px 12px`,
  },
  color__on: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    boxShadow: "0px 3px 15px 0px #EBEBEB",
  },
  colors: {
    position: "absolute",
    top: "2rem",
    padding: "5px",
    width: "6rem",
    display: "none",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    gridGap: "3px",
    "&.active": {
      display: "grid",
      boxShadow: "0px 3px 15px 0px #EBEBEB",
    }
  },
}))

export { ColorPicker }