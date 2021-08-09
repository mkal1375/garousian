import styled from "styled-components";

export default function Button(props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.button`
  border-radius: var(--curve);
  background-color: ${(props) =>
    props.secondary ? "transparent" : "var(--blue)"};
  border: 1px solid;
  border-color: ${(props) =>
    props.secondary ? "var(--white)" : "var(--blue)"};
  color: var(--white);
  cursor: pointer;
  height: 4rem; //64px
  font-size: var(--fs-button);
  padding-right: 3rem;
  padding-left: 3rem;
  min-width: 8.4375rem; // 135px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    padding-right: 1.75rem;
    padding-left: 1.75rem;
    height: 3rem;
  }
`;
