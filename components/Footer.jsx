import styled from "styled-components";

export default function Footer() {
  return <Wrapper>©2019 . Company . All rights reserved</Wrapper>;
}

const Wrapper = styled.footer`
  direction: ltr;
  font-size: 1.125rem;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--text);
  color: var(--gray-100);
  font-weight: 100;

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    height: 30px;
  }
`;
