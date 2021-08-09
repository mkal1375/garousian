import styled from "styled-components";
import { Heading2 } from "./Heading";
import Text from "./Text";
import Testimonial from "./Testimonial";

export default function TestimonialSection() {
  return (
    <Section>
      <Heading2>مشتریان ما در موردمان چه می‌گویند</Heading2>
      <WrappedText color="gray-200">
        از این زیر‌عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
        خدمات خود استفاده می‌کنیم. با کلیک بر روی این قسمت می‌توانید متن خود را
        ویرایش کنید
      </WrappedText>
      <Box>
        <Testimonial
          img="/Images/man1.jpg"
          customerName="سهراب یزدانی"
          customerTitle="عنوان شغل، اسم شرکت"
          text="این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید  برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند."
        />
        <Testimonial
          img="/Images/man2.jpg"
          customerName="علی جوانمردی"
          customerTitle="عنوان شغل، اسم شرکت"
          text="این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید  برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند."
        />
      </Box>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  padding: 1rem;
  padding-top: var(--section-vertical-space);
`;

const WrappedText = styled(Text)`
  max-width: 700px;
  margin: 1rem auto 0 auto;
`;

const Box = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4.5rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const LogoBox = styled.div`
  margin-top: var(--section-vertical-space);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  svg {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    gap: 2rem;
    svg {
      width: 50px;
    }
  }
`;
