import styled from "styled-components";

import Logo from "../public/Images/Logo.svg";
import { Heading1 } from "./Heading";
import Text from "./Text";
import Button from "./Button";

export default function Header() {
  return (
    <Wrapper>
      <Box>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Heading1 white>به راحتی خدمات مورد نیاز خودت رو پیدا کن!</Heading1>
        <Text color="white">
          اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست
          و چه کارهایی انجام می‌ده
        </Text>
        <Buttons>
          <Button>مشاوره می‌خوام</Button>
          <Button secondary>فرم تماس با ما</Button>
        </Buttons>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 760px;
  width: 100%;
  background: url("/Images/cover.png") no-repeat center center;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--dark-blue-overlay);
  }

  @media screen and (max-width: 480px) {
    height: 520px;
  }
`;

const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  width: 12rem; //192px
  margin-bottom: 5rem; //80px
  @media screen and (max-width: 480px) {
    width: 7.5rem; //120px
    margin-bottom: 3rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 4rem; //64px
  @media screen and (max-width: 480px) {
    margin-top: 1.25rem;
  }
`;
