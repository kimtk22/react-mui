import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
/**
 * Button 컴포넌트
 *
 * 1. variant : 'contained' | 'outlined' | 'text' | string
 * 2. href : 이동할 url, <a>로 변경된다.
 * 3. color : Material UI default Theme에 따른다.
 *          'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
 * 4. size : 'small' | 'medium' | 'large'
 * 5. startIcon : 왼쪽에 icon 배치
 * 6. endIcon : 오른쪽에 icon 배치
 * 7. disableElevation : 입체감 표현, true | false
 * 8. disableRipple : 클릭시 효과, true | false
 *
 *
 * Stack 컴포넌트
 * layout를 하기 위한 컴포넌트
 *
 * 1. spacing : element 간의 간격
 * 2. direction : element 방향
 *
 *
 * IconButton 컴포넌트
 * icon으로 이루어진 button 컴포넌트
 *
 * 1. color : 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
 * 2. size : 'small' | 'medium' | 'large'
 *
 */

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      {/* variant */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://github.com">
          Text
        </Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>

      {/* color */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      {/* size */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* icon */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => {
            alert("Clicked");
          }}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
