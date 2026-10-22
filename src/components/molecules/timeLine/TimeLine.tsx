import React from "react";
import { St } from "./TimeLine.style";

import { SvgWrapper } from "../../organisms/mainPage/mainPage";
import Tooltip from "@mui/material/Tooltip";

const ColorTimline = { bgTool: "#ffdebd" } as const;
const TIMLINEACTION = [
  {
    d: "M945.1,629.8h-40.6c-6.6,0-12-5.4-12-12V609c0-6.6,5.4-12,12-12 h40.6c6.6,0,12,5.4,12,12v8.8C957.1,624.4,951.7,629.8,945.1,629.8z",
    transform: "matrix(1 0 0 1 897.8677 622.4731)",
    year: 1967,
    cx: 924.3,
    toolTip: "Родился 30 августа 1967",
  },
  {
    d: "M1214.6,701.2H1174c-6.6,0-12-5.4-12-12v-8.8c0-6.6,5.4-12,12-12 h40.6c6.6,0,12,5.4,12,12v8.8C1226.6,695.8,1221.2,701.2,1214.6,701.2z",
    transform: "matrix(1 0 0 1 1167.3667 693.8015)",
    year: 1986,
    cx: 1120.6,
    toolTip: "Осенью 1986 года был призван в ряды Советской Армии",
  },
  {
    d: "M1325.6,701.2h-40.6c-6.6,0-12-5.4-12-12v-8.8c0-6.6,5.4-12,12-12 h40.6c6.6,0,12,5.4,12,12v8.8C1337.6,695.8,1332.2,701.2,1325.6,701.2z",
    transform: "matrix(1 0 0 1 1278.326 693.8015)",
    year: 1989,
    cx: 1188.8,
    toolTip: "Умер 27 октября 1988 года",
  },
  {
    d: "M1140.6,629.8H1100c-6.6,0-12-5.4-12-12V609c0-6.6,5.4-12,12-12 h40.6c6.6,0,12,5.4,12,12v8.8C1152.6,624.4,1147.2,629.8,1140.6,629.8z",
    transform: "matrix(1 0 0 1 1093.3942 622.4731)",
    year: 1984,
    cx: 1258.9,
    toolTip: "В 1984 году поступил в Белорусский политехнический институт",
  },
  {
    d: "M1278.7,629.8h-40.6c-6.6,0-12-5.4-12-12V609c0-6.6,5.4-12,12-12 h40.6c6.6,0,12,5.4,12,12v8.8C1290.7,624.4,1285.3,629.8,1278.7,629.8z",
    transform: "matrix(1 0 0 1 1231.4915 622.4731)",
    year: 1988,
    cx: 1300.7,
    toolTip: "В марте 1988 года был тяжело ранен",
  },
] as const;

const TimeLine: React.FC = () => {
  return (
    <>
      <Tooltip title={"Прожил 21 год"} placement="bottom">
        <SvgWrapper>
          <St.PTimline
            x="924.1"
            y="620.5"
            opacity="0.25"
            fill="#0000FF"
            width="334.8"
            height="26.1"
          />
        </SvgWrapper>
      </Tooltip>
      <line
        fill="none"
        stroke="#000000"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="924.1"
        y1="646.7"
        x2="1300.7"
        y2="646.7"
      />

      {TIMLINEACTION.map(({ d, year, transform, cx, toolTip }) => (
        <React.Fragment key={year + "srd324__45ryrd"}>
          <circle
            fill="#F15A24"
            stroke="#000000"
            strokeMiterlimit={10}
            cx={cx}
            cy="646.5"
            r="6.8"
          />
          <St.TextTimline>
            <Tooltip title={toolTip} placement="top">
              <SvgWrapper>
                <path
                  fill={ColorTimline.bgTool}
                  stroke="#F15A24"
                  strokeMiterlimit={10}
                  d={d}
                />
                <text transform={transform} fontSize="24px">
                  {year}
                </text>
              </SvgWrapper>
            </Tooltip>
          </St.TextTimline>
        </React.Fragment>
      ))}
    </>
  );
};

export default TimeLine;
