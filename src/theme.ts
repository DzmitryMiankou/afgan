// src/theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gold: Palette["primary"];
  }
  interface PaletteOptions {
    gold?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gold: true;
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    gold: true;
  }
}

const theme = createTheme({
  palette: {
    gold: {
      main: "#845d2a",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        color: "gold",
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#ffffff", // Цвет фона тултипа
          color: "#a4783e", // Цвет текста внутри тултипа
          fontSize: "14px", // (Опционально) Размер шрифта
          borderRadius: "4px", // (Опционально) Закругление углов
          fontWidth: "200",
          border: "solid #a4783e 1px",
        },
        arrow: {
          color: "#a4783e", // Цвет стрелочки тултипа (если включен пропс arrow)
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "70%",
        },
      },
    },
  },
});

export default theme;
