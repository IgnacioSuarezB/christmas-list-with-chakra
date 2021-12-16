import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "whitesmoke",
      // ...
      900: "#1a202c",
    },
  },
});
export default theme;
