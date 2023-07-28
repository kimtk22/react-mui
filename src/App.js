import "./App.css";
import { MuiToggleButton } from "./components/Button/MuiToggleButton";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiRating } from "./components/MuiRating";
import { MuiSelect } from "./components/MuiSelect";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiTextField } from "./components/MuiTextField";
import { MuiBox } from "./components/MuiLayout";
import { MuiCard } from "./components/MuiCard";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import { ThemeProvider, colors, createTheme } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypograpgy /> */}
        {/* <MuiButton /> */}
        {/* <MuiButtonGroup /> */}
        {/* <MuiToggleButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiBox /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
