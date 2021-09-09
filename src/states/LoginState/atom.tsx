import {
  atom,
} from 'recoil';
import { LoginParams } from "./types";
const loginStateParams = atom<LoginParams>({
  key: `loginPage__loginStateParams`,
  default: {
    userId: "",
    password: ""
  }
});

export {
  loginStateParams
}

