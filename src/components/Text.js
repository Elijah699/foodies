import styled from 'styled-components';
import { theme } from "../config";

export const Title = styled.h2`
  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.bigTextTwo};
  font-weight: ${theme.fontWeight.normal};
  line-height: ${theme.lineHeights.bigTextTwo};
  color: ${theme.colors.black200};
  text-align: center;
  margin: ${theme.margin.xmd} 0 !important;
`;