import React from "react";
import { createUseStyles } from 'react-jss';
import { useRecoilValue } from "recoil";
import { ThemeType } from "src/styles/theme";

const DailySchedule: React.FC = () => {

  const classes = useStyles();

  return (
    <div>

    </div>
  )
}

const useStyles = createUseStyles((theme: ThemeType) => ({

}))

export { DailySchedule }