import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = ({ target: { checked } }) => {
    setChecked(checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch />}
        checked={checked}
        onChange={handleChange}
      />
    </Box>
  );
};
