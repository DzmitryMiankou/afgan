import React from "react";
import { St } from "./App.style";
import Header from "./components/organisms/header/header";
import customData from "./data.json";
import MainPage from "./components/organisms/mainPage/mainPage";

type MyKeys = "firstName" | "lastName" | "patronymic" | "mainText";
export type TitleTs<S = string> = { [K in MyKeys]: S };
type HeaderDataTS = { biography: TitleTs };

const App: React.FC = () => {
  const data = customData as Array<HeaderDataTS>;

  return (
    <St.PagekWidth>
      <Header />
      <MainPage biography={data[0].biography} />
    </St.PagekWidth>
  );
};

export default App;
