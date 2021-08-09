import styled from "styled-components";

export default function Text(props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.p`
  font-size: var(--fs-body);
  color: ${(props) => `var(--${props.color})`};
`;

Wrapper.defaultProps;

Wrapper.defaultProps = {
  color: "text",
};
