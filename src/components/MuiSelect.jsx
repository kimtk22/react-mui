import { Box, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

/**
 * 1. TextField로 Select 구현
 * TextField 컴포넌트
 * 1. select : 이 옵션을 설정하면 선택 옵션을 자식으로 전달해야 합니다.
 * 2. SelectProps : Select API 사용
 *
 *
 * Box : div 대시 사용
 *
 */

export const MuiSelect = () => {
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);

  console.log(`country : ${country}`);
  console.log(`countries : ${countries}`);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleCountriesChange = (e) => {
    setCountries(e.target.value);
  };

  return (
    <Stack spacing={4}>
      {/* Single */}
      <Stack direction="row">
        <Box width="250px">
          <TextField
            label="Select country"
            select
            value={country}
            onChange={handleCountryChange}
            fullWidth
            size="small"
            color="secondary"
            helperText="Please select country"
            error
          >
            <MenuItem value="IN">india</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="KR">Korea</MenuItem>
          </TextField>
        </Box>
      </Stack>

      {/* Multiple */}
      <Stack direction="row">
        <Box width="250px">
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleCountriesChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
          >
            <MenuItem value="IN">india</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="KR">Korea</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </Stack>
  );
};
