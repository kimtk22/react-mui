import { Typography } from "@mui/material";

/**
 * text를 표현하기 위한 컴포너트
 *
 * 1. variant : 스타일 지정
 *              'body1'(default) | 'body2' | 'button' | 'caption'
 *              | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
 *              | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2' | string
 *
 * 2. component : element 지정
 * 3. gutterBottom : bottom margin 유무, default: false
 */

export const MuiTypograpgy = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom={true}>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      {/* 16px */}
      <Typography variant="body1">body1</Typography>
      <Typography>body1</Typography>
      <Typography variant="body2">body2</Typography>
    </div>
  );
};
