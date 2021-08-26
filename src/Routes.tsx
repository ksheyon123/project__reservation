import {
  Switch,
  Route,
} from "react-router-dom";
import {
  createUseStyles
} from "react-jss";
import { ThemeType } from "./styles/theme";
import {
  LoginPage,
  CalendarPage,
} from "./pages/index";
import {
  MainLayout
} from "./components/common/index";
import {
  ROUTE
} from "./constants/index";

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
