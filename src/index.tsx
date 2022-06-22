import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {
  ThemeProvider
} from "react-jss";
import Theme from "src/styles/theme";
import { RecoilRoot } from "recoil";
import { ModalProvider } from "src/contexts/ModalContext";
import { ScheduleInputProvider } from "src/contexts/ScheduleInputContext";

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
