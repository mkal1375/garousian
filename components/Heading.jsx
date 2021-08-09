import styled from "styled-components";

export function Heading1(props) {
  return <Heading1Wrapper {...props} />;
}
const Heading1Wrapper = styled.h1`
  font-size: var(--fs-h1);
  font-weight: 500;
  color: ${(props) => (props.white ? "var(--white)" : "var(--text)")};
`;

export function Heading2(props) {
  return <Heading2Wrapper {...props} />;
}
const Heading2Wrapper = styled.h2`
  /* font-size: clamp(21px, 1.5vw, 28px); */
  font-size: var(--fs-h2);
  font-weight: 500;
  color: ${(props) => (props.white ? "var(--white)" : "var(--text)")};
`;
