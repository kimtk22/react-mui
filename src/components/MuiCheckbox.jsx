import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BookmarkBorder } from "@mui/icons-material";

/**
 * [CheckBox 컴포넌트]
 *
 * 1. icon : 구성 요소가 선택 취소되었을 때 표시되는 아이콘입니다.
 * 2. checkedIcon : 구성 요소를 선택할 때 표시할 아이콘입니다.
 * 3. value : value 값
 * 4. onChange : (event, checked) => {}
 * 5. size : small | medium | large
 * 6. color :
 *
 * [FormControlLabel 컴포넌트]
 * CheckBos, Switch와 사용된다.
 *
 * 1. label : 라벨명
 * 2. control : form component, [Radio, Checkbox, Switch]
 *
 * [FormGroup 컴포넌트]
 * Checkbox, Switch, Radio를 그룹화
 */

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = ({ target: { checked } }) => {
    setAcceptTnC(checked);
  };

  const handleSkillsChange = ({ target: { value } }, checked) => {
    checked
      ? setSkills([...skills, value])
      : setSkills(skills.filter((skill) => skill !== value));
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormHelperText>Check your skils</FormHelperText>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="javascript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
