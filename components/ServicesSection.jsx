import styled from "styled-components";
import { Heading2 } from "./Heading";
import Text from "./Text";
import { ServiceCard } from "./ServiceCard";

export default function ServicesSection() {
  return (
    <Section>
      <Heading2>ما خدمات زیادی به مشتریان بزرگمان ارائه می‌دهیم</Heading2>
      <WrappedText color="gray-200">
        از این زیر‌عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
        خدمات خود استفاده می‌کنیم. با کلیک بر روی این قسمت می‌توانید متن خود را
        ویرایش کنید
      </WrappedText>
      <Grid>
        <ServiceCard
          img={"/Images/f3.png"}
          alt="A man is designing a website."
          title="تجزیه و تحلیل وب"
          text="اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه می‌دهید"
          badges={[
            ["SEO", "indigo"],
            ["Marketing", "indigo"],
          ]}
        />
        <ServiceCard
          img={"/Images/f2.png"}
          alt="A woman is using calculator"
          title="خدمات مالی"
          text="اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه می‌دهید"
          badges={[
            ["Best Invest", "green"],
            ["Saftey Pay", "green"],
          ]}
        />
        <ServiceCard
          img={"/Images/f1.png"}
          alt="An indian man is coding."
          title="طراحی جدید"
          text="اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه می‌دهید"
          badges={[
            ["IT Solution", "orange"],
            ["Web Design", "orange"],
          ]}
        />
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  padding: 1rem;
  padding-top: var(--section-vertical-space);
  padding-bottom: var(--section-vertical-space);
`;

const WrappedText = styled(Text)`
  max-width: 700px;
  margin: 1rem auto 3rem auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
`;
