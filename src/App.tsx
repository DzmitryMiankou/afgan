import React from "react";
import { St } from "./App.style";
import Header from "./components/organisms/header/header";
import customData from "./data.json";
import MainPage from "./components/organisms/mainPage/mainPage";
import { useRef } from "react";
import { useSizeHTMLElement } from "./hook/useSizeHTMLElement";
import ScrollDialog from "./components/molecules/scrollDialog/scrollDialog";

type MyKeys = "firstName" | "lastName" | "patronymic" | "mainText";
export type TitleTs<S = string> = { [K in MyKeys]: S };
type HeaderDataTS = { biography: TitleTs };

const App: React.FC = () => {
  const data = customData as Array<HeaderDataTS>;
  const HeadRef = useRef<HTMLElement>(null);
  const { dimensions } = useSizeHTMLElement(HeadRef);
  const MainPageData = {
    biography: data[0].biography,
    hightHeader: dimensions.height,
  };
  const { lastName, firstName, patronymic } = MainPageData.biography;

  return (
    <St.PagekWidth>
      <Header ref={HeadRef} name={[lastName, firstName, patronymic]} />
      <MainPage data={{ ...MainPageData }} />
      <ScrollDialog />
    </St.PagekWidth>
  );
};

export default App;
