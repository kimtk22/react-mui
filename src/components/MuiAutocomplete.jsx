import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

/**
 * [Autocomplete 컴포넌트]
 *
 * 1. options : Array of options.
 * 2. renderInput : Signature: function(params: object) => ReactNode
 * 3. freeSolo : 사용자 입력이 제공된 옵션에 구속되지 않고, 입력 가능
 *
 */

export const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log(value);
  console.log(skill);

  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
        loading
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};
