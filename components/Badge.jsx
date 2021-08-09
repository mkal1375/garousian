import styled from "styled-components";

export default function Badge(props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.span`
  height: 32px;
  color: ${(p) => `var(--${p.color})`};
  background-color: ${(p) => `var(--light-${p.color})`};
  width: 7.6875rem; // 123px
  font-size: var(--fs-body-sm);
  font-weight: 500;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
