import styled from "styled-components";
export const Box = styled.div<{ widthLevel?: number }>`
  background: black;
  min-height: 50px;
  min-width: ${({ widthLevel = 2 }) => widthLevel * 50}px;
`;
