import { atom } from "recoil";

const pageState = atom<Number>({
  key: "pageState",
  default: 1,
});

export {pageState}