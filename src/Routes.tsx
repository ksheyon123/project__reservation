import {
  Switch,
  Route,
} from "react-router-dom";
import {
  createUseStyles
} from "react-jss";
import { ThemeType } from "src/styles/theme";
import {
  LoginPage,
  CalendarPage,
} from "src/pages/index";
import {
  MainLayout
} from "src/components/common/index";
import {
  ROUTE
} from "src/constants/index";

const Routes = () => {
  const useStyles = createUseStyles((theme: ThemeType) => ({
    "@global": {
      html: {
        fontSize: "62.5%",
        fontFamily: theme.font,
        letterSpacing: "-0.04rem",
        wordBreak: "keep-all",
        wordWrap: "break-word",
        color: theme.mono6,
        fontStyle: "normal",
        fontWeight: theme.regular,
        lineHeight: "2.6rem",
        background: theme.mono1,
      },
      body: {
        fontSize: "1.6rem",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        lineHeight: "2.6rem",
        background: theme.mono1,
        margin: 0,
      },
      ".container": {
        position: "absolute",
        top: 0,
        width: "100vw",
        height: "100vh"
      },
    }
  }))

  useStyles();
  return (
    <div className="container">
      <Switch>
        <Route exact path={ROUTE.LOGIN} component={LoginPage} />
        <MainLayout >
          <Route exact path={ROUTE.CALENDER} component={CalendarPage} />
        </MainLayout>
      </Switch>
    </div>

  )
}

export default Routes;
