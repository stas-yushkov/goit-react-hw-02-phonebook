import styled from "styled-components";

import { colors } from "constants/colors";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.type === 'button' ? '10px' : '20px'};
  background-color: ${colors.buttonBg};
  color: ${colors.button};
  border: 1px solid ${colors.buttonBorder};
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: ${colors.buttonBghoverFocus};
    outline: none;
  }
  &:active {
    background-color: ${colors.buttonBgPressed};
  }
`