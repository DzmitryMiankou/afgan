import React from "react";
import { St } from "./App.style";
import Header from "./components/organisms/header/header";
import customData from "./data.json";
import MainPage from "./components/organisms/mainPage/mainPage";
import { useRef } from "react";
import { useSizeHTMLElement } from "./hook/useSizeHTMLElement";

type MyKeys = "firstName" | "lastName" | "patronymic" | "mainText";
export type TitleTs<S = string> = { [K in MyKeys]: S };
type HeaderDataTS = { biography: TitleTs };

const App: React.FC = () => {
  const data = customData as Array<HeaderDataTS>;
  const HeadRef = useRef<HTMLElement>(null);
  const { dimensions } = useSizeHTMLElement(HeadRef);

  return (
    <St.PagekWidth>
      <Header ref={HeadRef} />
      <MainPage biography={data[0].biography} hightHeader={dimensions.height} />
    </St.PagekWidth>
  );
};

export default App;
