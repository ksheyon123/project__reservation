import React from "react";
import { createUseStyles } from "react-jss";
import { ThemeType } from "../../styles/theme";


export interface ModalButtonProps {
  label: string;
  onClick: () => void;
  isLoading: boolean;
}

interface Props {
  buttons: ModalButtonProps[];
}

function isMultipleButtons(props: Props) {
  return props.buttons.length > 1;
}

const useStyles = createUseStyles((theme: ThemeType) => ({
  wrap: {
    display: "flex",
    width: "100%",
  },
  button: (props: Props) => ({
    fontSize: "1.8rem",
    lineHeight: "2.8rem",
    width: isMultipleButtons(props) ? "50%" : "100%",
    height: 54,
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderStyle: "none",
    "&:nth-child(1)": {
      background: isMultipleButtons(props) ? theme.monoBg : theme.primarySol,
      color: isMultipleButtons(props) ? theme.mono0 : theme.mono1,
      borderRadius: isMultipleButtons(props) ? "0 0 0px 10px" : "0 0 10px 10px",
    },
    "&:nth-child(2)": {
      background: theme.primarySol,
      color: theme.mono1,
      borderRadius: "0 0 10px 0px",
    },
  }),
  innerWrap: {
    display: "flex",
    margin: "0 auto",
  },
}));

const ModalButton: React.FC<Props> = (props) => {
  const { buttons } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.wrap}>
      {buttons.map(
        ({ label, isLoading, onClick }: ModalButtonProps, i: number) => {
          return (
            <button
              key={i}
              onClick={!isLoading ? onClick : () => { }}
              className={classes.button}
            >
              <div key={i} className={classes.innerWrap}>
                {label}
              </div>
            </button>
          );
        }
      )}
    </div>
  );
};

export { ModalButton };
