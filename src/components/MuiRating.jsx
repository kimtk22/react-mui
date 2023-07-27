import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

/**
 * [Rating 컴포넌트]
 *
 * 1. value : 0-5
 * 2. precision : 허용되는 최소 증분 값 변경, default 1
 * 3. icon : 표시할 아이콘입니다.
 * 4. emptyIcon : 비어 있을 때 표시할 아이콘입니다.
 * 5. readOnly : 모든 호버 효과 및 포인터 이벤트를 제거합니다.
 * 6. highlightSelectedOnly : 선택한 아이콘만 강조 표시됩니다.
 *
 */

export const MuiRating = () => {
  const [value, setValue] = useState(3);
  console.log(value);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};
