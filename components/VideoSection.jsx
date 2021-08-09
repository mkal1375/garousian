import styled from "styled-components";
import { Heading2 } from "./Heading";
import Text from "./Text";

export default function VideoSection() {
  return (
    <Section>
      <Player src="/Images/player.png" />
      <InfoBox>
        <Heading2WithMargin white>
          ویدئو معرفی ما را تماشا کنید
        </Heading2WithMargin>
        <P style={{ marginBottom: "1rem" }}>
          این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید.
          این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران
          اطلاعات بیشتری بدست آورند.
        </P>
        <P>
          این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید.
          این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران
          اطلاعات بیشتری بدست آورند.
        </P>
      </InfoBox>
      {/* <Grid></Grid> */}
    </Section>
  );
}

const Section = styled.section`
  padding: var(--section-vertical-space) 1rem;
  background-color: var(--gray-300);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Heading2WithMargin = styled(Heading2)`
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Player = styled.img`
  width: min(40%, 480px);
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const P = styled.p`
  max-width: 600px;
  font-size: var(--fs-body);
  color: var(--white);
  font-weight: 300;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    display: block;
    background-color: var(--white);
    border-radius: 50%;
  }
`;
