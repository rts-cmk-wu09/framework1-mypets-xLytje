import styled from "styled-components";

const StyledButton = styled.button`
  color: var(--tags);
  height: 32px;
  width: 76px;
  min-width: 76px;
`;
export const Tags = (props) => {
  return <StyledButton>{props.name}</StyledButton>;
};
