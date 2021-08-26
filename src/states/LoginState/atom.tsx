import {
  atom,
} from 'recoil';
import { LoginParams } from "./types";
const loginStateParams = atom<LoginParams>({
  key: "loginStateProps",
  default: {
    userId: "",
    password: ""
  }
});

export {
  loginStateParams
}

