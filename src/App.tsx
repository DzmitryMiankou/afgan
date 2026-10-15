import React from "react";
import { St } from "./App.style";
import Header from "./components/organisms/header/header";
import customData from "./data.json";

type MyKeys = "firstName" | "lastName" | "patronymic" | "mainText";
export type TitleTs<S = string> = { [K in MyKeys]: S };
type HeaderDataTS = { biography: TitleTs };

const App = () => {
  const data: Array<HeaderDataTS> = customData;
  return (
    <St.PagekWidth>
      <Header biography={data[0].biography} />
    </St.PagekWidth>
  );
};

export default App;
