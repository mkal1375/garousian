import styled from "styled-components";
import { Heading2 } from "./Heading";
import Text from "./Text";
import Button from "./Button";

export default function ApplySection(props) {
  return (
    <Wrapper {...props}>
      <Box>
        <Heading2 white>اگر علاقه‌مند به همکاری با ما هستی</Heading2>
        <WrappedText color="white">
          از این زیر‌عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
          خدمات خود استفاده می‌کنیم. با کلیک بر روی این قسمت می‌توانید متن خود
          را ویرایش کنید
        </WrappedText>
        <Buttons>
          <Button>ارسال رزومه</Button>
          <Button secondary>فرم تماس با ما</Button>
        </Buttons>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 520px;
  width: 100%;
  background: url("/Images/cover.png") no-repeat center center;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--black-overlay);
  }
  @media screen and (max-width: 480px) {
    height: 420px;
  }
`;

const Buttons = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const WrappedText = styled(Text)`
  margin-top: 1rem;
  max-width: 700px;
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
