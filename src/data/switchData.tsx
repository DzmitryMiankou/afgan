import { TypeInfo } from "../redux/openInfoReducer/openInfoReducer";
import Info from "./Info";
import Memory from "./Memory";
import Pinfo from "./Pinfo";
import War from "./War";
import History from "./History";

type ELEMENT_TYPE = { title: string; element: React.JSX.Element };
type INFO_CONTENT_MAP_TYPE = Record<TypeInfo, ELEMENT_TYPE>;

export const INFO_CONTENT_MAP: INFO_CONTENT_MAP_TYPE = {
  person: { title: "Биографическая информация", element: <Pinfo /> },
  mail: { title: "Письма домой", element: <Pinfo /> },
  history: { title: "Источники проекта", element: <History /> },
  memory: { title: "Увековечивание памяти", element: <Memory /> },
  schoolData: { title: "Применение в школе", element: <Pinfo /> },
  info: { title: "Информация о проекте", element: <Info /> },
  war: { title: "Информация о войне", element: <War /> },
  err: { title: "error", element: <></> },
};
