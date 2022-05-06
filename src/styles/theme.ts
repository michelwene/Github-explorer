import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#3A3A3A",
      "800": "#3D3D4D",
      "300": "#6C6C80",
      "200": "#A8A8B3",
      "100": "#C9C9D4",
      "50": "#F2F2FA",
    },
    green: {
      "500": "#04D361",
    },
  },
  styles: {
    global: {
      body: {
        backgroundImage: "/Github.svg",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right 20%",
        backgroundSize: "688px",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        minHeight: "100vh",
        bg: "gray.50",
        color: "gray.900",
      },
    },
  },
});
