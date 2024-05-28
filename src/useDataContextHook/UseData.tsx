import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const UseData = () => {
  return useContext(DataContext);
};
