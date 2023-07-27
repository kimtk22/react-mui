import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

/**
 * ButtonGroup 컴포넌트
 * Button 컴포넌트 그룹화하는 컴포넌트
 *
 * 1. variant : 'contained' | 'outlined' | 'text'
 * 2. orientation : 'horizontal' | 'vertical'
 *
 */

export const MuiButtonGroup = () => {
  return (
    <Stack spacing={4}>
      {/* without ButtonGroup */}
      <Stack direction="row">
        <Button variant="contained">Left</Button>
        <Button variant="contained">Center</Button>
        <Button variant="contained">Right</Button>
      </Stack>

      {/* with ButtonGroup */}
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button
            onClick={() => {
              alert("Left button clicked!");
            }}
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
