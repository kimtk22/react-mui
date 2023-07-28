import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

/**
 * [Box 컴포넌트]
 * 1. component : 루트 노드에 사용되는 구성 요소입니다. HTML 요소 또는 구성 요소를 사용하는 문자열입니다.
 * 2. sx : 추가 CSS 스타일뿐만 아니라 시스템 재정의를 정의할 수 있는 시스템 소품.
 *
 * [Stack 컴포넌트]
 * 1. sx : 시스템 스타일
 * 2. direction : 요소들 방향
 * 3. spacing : 간격
 * 4. divider : 각 자식 사이에 요소를 추가합니다.
 *
 * [Divider 컴포넌트]
 * 1. orientation : 구성요소 방향, 'horizontal' | 'vertical'
 * 2. flexItem : 세로 구분선은 플렉스 컨테이너에서 사용될 때 올바른 높이를 갖습니다
 *
 * [Grid 컴포넌트]
 * break point : [xs: mobile, sm: tablet, md: desktop, lg and xl: large monitors]
 *
 * 1. container : 구성 요소는 플렉스 컨테이너 동작을 갖습니다. 용기로 물건을 포장해야 합니다.
 * 2. item
 *
 * [Paper 컴포넌트]
 * 1. elevation: 그림자 깊이는 사양의 dp에 해당합니다. 0에서 24 사이의 값을 허용합니다.
 */

export const MuiBox = () => {
  return (
    <Paper sx={{ padding: "33px" }} elevation={1}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} spacing={1} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.main" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.main" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.main" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.main" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
