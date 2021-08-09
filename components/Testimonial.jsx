import styled from "styled-components";

export default function Testimonial({
  img,
  customerName,
  customerTitle,
  text,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <ImgWrapper>
        <img src={img} alt={customerTitle} />
      </ImgWrapper>
      <InfoBox>
        <Text>{text}</Text>
        <div>
          <Name>{customerName}</Name>
          <Title>{customerTitle}</Title>
        </div>
      </InfoBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 512px;
  width: 100%;
  border-radius: var(--curve-xl);
  background-color: var(--white);
  box-shadow: 0 3px 46px rgba(0, 0, 0, 0.1);
  padding: 4rem 3rem;
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    max-width: none;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem;
    gap: 2rem;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 2.5rem;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    gap: 2rem;
  }
`;

const ImgWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 82px;
  height: 82px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
`;

const Text = styled.p`
  font-weight: 100;
  font-size: var(--fs-body-lg);
  @media screen and (max-width: 960px) {
    order: 2;
  }
`;
const Name = styled.span`
  display: block;
  font-weight: 400;
  font-size: 1.25rem;
`;
const Title = styled.span`
  display: block;
  font-weight: 300;
  font-size: 1rem;
`;
