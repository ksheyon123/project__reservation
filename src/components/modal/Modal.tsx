import React, { useRef, RefObject, Fragment } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { createUseStyles } from "react-jss";
import { ThemeType } from "../../styles/theme";
import useOutsideClick from "../../hooks/useOutsideClick";
import { ModalButton } from "./ModalButtonProps";
import clsx from "clsx";

interface Props { }

const Modal: React.FC<Props> = () => {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>();
  const { modalContent, handleModal, isModalOpened } = React.useContext(
    ModalContext
  );

  useOutsideClick(ref, () => {
    if (modalContent.disableOutsideClick) return;
    if (isModalOpened) handleModal();
  });

  const { title, buttons } = modalContent;

  return ReactDOM.createPortal(
    <div className={clsx(classes.dim, isModalOpened && "opened")}>
      <div ref={ref as RefObject<HTMLDivElement>} className={classes.wrap}>
        <div className={classes.body}>
          <p>
            {title.split("\n").map((item: string, key: number) => {
              return (
                <Fragment key={key}>
                  {item}
                  <br />
                </Fragment>
              );
            })}
          </p>
        </div>
        <ModalButton buttons={buttons} />
      </div>
    </div>,
    document.querySelector("#root-modal")!
  );
};

const useStyles = createUseStyles((theme: ThemeType) => ({
  dim: {
    position: "fixed",
    background: "rgba(0, 0, 0, 0.6)",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 99999,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    "&.opened": {
      display: "flex"
    }
  },
  wrap: {
    width: "calc(100% - 60px)",
    position: "absolute",
    background: theme.mono1,
    boxShadow: `0px 2px 16px 8px rgba(0,0,0,0.04)`,
    borderRadius: 10,
    "& > div > p": {
      fontSize: "1.8rem",
      lineHeight: "2.8rem",
      margin: 0,
    },
    "& > div > input": {
      marginTop: 28,
      "&:first-of-type": {
        marginTop: 32,
      },
      "& > label": {
        marginBottom: 8,
      },
    },
  },
  body: {
    padding: "26px 22px",
  },
}));

export { Modal };
