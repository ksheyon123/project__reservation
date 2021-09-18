import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {
  ThemeProvider
} from "react-jss";
import Theme from "./styles/theme";
import { RecoilRoot } from "recoil";
import { ModalProvider } from "./contexts/ModalContext";
import { ScheduleInputProvider } from "./contexts/ScheduleInputContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RecoilRoot>
        <ModalProvider>
          <ScheduleInputProvider>
            <Router>
              <Routes />
            </Router>
          </ScheduleInputProvider>
        </ModalProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
