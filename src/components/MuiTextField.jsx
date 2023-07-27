import { Input, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

/**
 * TextField
 *
 * 1. label : label 설정
 * 2. variant : 'filled' | 'outlined' | 'standard'
 * 3. color :  'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
 * 4. size : small | meidum | large
 * 5. required : true | false
 * 6. helperText : bottom에 설명글 작성
 * 7. type : input type 설정
 * 8. disabled : true | false
 * 9. error : true | false
 *
 * InputAdornment
 *
 * 1. position : 'end' | 'start'
 */

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      {/* variant */}
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* size and color */}
      <Stack direction="row" spacing={2}>
        <TextField label="Small secomdary" size="mi" color="secondary" />
      </Stack>

      {/* required, helperText, disabled, InputProps */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          error={!value}
          helperText={value ? "" : "Required"}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* InputAdornment */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amout"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
