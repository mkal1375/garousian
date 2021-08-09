import Brand1 from "../public/Images/1.svg";
import Brand2 from "../public/Images/2.svg";
import Brand3 from "../public/Images/3.svg";
import Brand4 from "../public/Images/4.svg";
import Brand5 from "../public/Images/5.svg";

import styled from "styled-components";
export default function BrandsSection() {
  return (
    <Wrapper>
      <Brand height="60px" mobileHeight="40px">
        <Brand5 />
      </Brand>
      <Brand height="65px" mobileHeight="42px">
        <Brand4 />
      </Brand>
      <Brand height="80px" mobileHeight="52px">
        <Brand3 />
      </Brand>
      <Brand height="70px" mobileHeight="46px">
        <Brand2 />
      </Brand>
      <Brand height="60px" mobileHeight="39px">
        <Brand1 />
      </Brand>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  svg {
    display: block;
    flex-shrink: 0;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 3rem 1rem;
  }
`;

const Brand = styled.div`
  height: ${(p) => p.height};
  @media screen and (max-width: 480px) {
    height: ${(p) => p.mobileHeight};
  }
`;
