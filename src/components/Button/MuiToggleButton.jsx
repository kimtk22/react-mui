import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

/**
 * ToggleButton 컴포넌트
 *
 * 1. value : ToggleButtonGroup에서 선택했을 때 버튼과 연결할 값
 *
 *
 * ToggleButtonGroup 컴포넌트
 *
 * 1. value : 선택된 ToggleButton들의 value의 list or value
 * 2. exclusive : 자식 ToggleButton 값 중 하나만 선택할 수 있습니다. true | false
 *
 */

export const MuiToggleButton = () => {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  const handleFormatChange = (e, updatedFormats) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        color="primary"
        size="small"
        orientation="vertical"
        // exclusive
      >
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
