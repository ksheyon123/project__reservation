import {
  atom,
} from 'recoil';

const LNBStateParams = atom<boolean>({
  key: `HeaderComponent__LNBStateParams`,
  default: false
});

export {
  LNBStateParams
}