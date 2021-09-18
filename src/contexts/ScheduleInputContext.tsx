import React, { useState } from "react";
import { ScheduleInputForm } from "../components/modal/ScheduleInputForm";

const ScheduleInputContext = React.createContext<any>({});
const { Provider } = ScheduleInputContext;

const ScheduleInputProvider = ({ children }: { children: React.ReactNode }) => {
  const [isScheduleInputOpended, toggleScheduleInput] = React.useState<boolean>(false);
  const [clickedPosition, setClickPosition] = React.useState<boolean>(false);

  return (
    <Provider value={{ isScheduleInputOpended, clickedPosition, toggleScheduleInput, setClickPosition }}>
      <ScheduleInputForm />
      {children}
    </Provider>
  )
}

export { ScheduleInputContext, ScheduleInputProvider }