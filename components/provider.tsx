"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../common/config/store";

interface props {
  children?: React.ReactNode;
}
const Providers: React.FC<props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
