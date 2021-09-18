import React from "react";
import { createUseStyles } from "react-jss";
// import clsx from "clsx";
import ic01 from "../../assets/hamburger_icon.png";
import leftArrow from "../../assets/leftArrow@2x.png";
import rightArrow from "../../assets/rightArrow@2x.png";
import {
  useRecoilState,
} from "recoil";
import {
  LNBStateParams
} from "../../states/NavState/atom";
import { ThemeType } from "../../styles/theme";
import clsx from "clsx";


const Header: React.FC = () => {
  const classes = useStyles();
  const [isShowLNB, setIsShowLNB] = useRecoilState(LNBStateParams);
  return (
    <header className={classes.header}>
      <div className={clsx(isShowLNB && "active")}><img src={ic01} style={{ width: "5rem", height: "5rem" }} onClick={() => setIsShowLNB(!isShowLNB)} alt="hamberger" /></div>
      <div>
        <div>
          <img src={leftArrow} alt="left" />
        </div>
        <div>
          <img src={rightArrow} alt="left" />
        </div>
      </div>
    </header>
  )
}

const useStyles = createUseStyles((theme: ThemeType) => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "6rem",
    boxShadow: "0 0 10px 0 #EBEBEB",
    backgroundColor: "#FFF",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "5rem",
      height: "5rem",
      "&.active": {
        borderRadius: "50%",
        backgroundColor: theme.mono4Dim,
      }
    }
  },

}))

export { Header }