import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
`;

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
`;