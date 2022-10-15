import styled from "styled-components";
import { theme } from '../config'

export const Button = styled.button`
    background: ${theme.colors.red};
    outline: none;
    border: none;
    width: 150px;
    color: ${theme.colors.white};
    padding: 16px 15px;
    border-radius: 16px;
    font-size: ${theme.fontSizes.smallText};
    line-height: ${theme.lineHeights.smalltext};
    cursor: pointer;
`