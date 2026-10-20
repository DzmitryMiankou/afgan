import { TypeInfo } from "../redux/openInfoReducer/openInfoReducer";
import Pinfo from "./Pinfo";

type INFO_CONTENT_MAP_TYPE = Record<
  TypeInfo,
  { title: string; element: React.JSX.Element }
>;
export const INFO_CONTENT_MAP: INFO_CONTENT_MAP_TYPE = {
  person: { title: "Биографическая информация", element: <Pinfo /> },
  mail: { title: "Письма домой", element: <Pinfo /> },
  history: { title: "Источники проекта", element: <Pinfo /> },
  memory: { title: "Увековечивание памяти", element: <Pinfo /> },
  schoolData: { title: "Применение в школе", element: <Pinfo /> },
  info: { title: "Информация о проекте", element: <Pinfo /> },
  war: { title: "Информация о войне", element: <Pinfo /> },
  err: { title: "error", element: <></> },
};
