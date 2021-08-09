import Badge from "./Badge";
import styled from "styled-components";

export function ServiceCard({ img, imgAlt, title, text, badges, ...props }) {
  return (
    <Wrapper {...props}>
      <div className="image">
        <img src={img} alt={imgAlt} />
      </div>
      <div className="card">
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          {badges.map((badge) => (
            <Badge key={badge[0]} color={badge[1]}>
              {badge[0]}
            </Badge>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .image {
    width: 100%;
    height: 17.25rem; // 276px
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
    }
    @media screen and (max-width: 480px) {
      height: 220px;
    }
  }
  .card {
    position: relative;
    z-index: 1;
    padding: 42px 40px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: -50px;
    background-color: var(--white);
    text-align: center;
    border-radius: var(--curve-xl);
    box-shadow: 0 3px 46px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 480px) {
      padding: 26px 20px;
    }
    h3 {
      margin: 0;
      font-size: var(--fs-h3); // 20px;
    }
    p {
      margin-top: 1rem;
      font-weight: 300;
      margin-bottom: 2.5rem; //40px
      color: var(--bluegray);
    }
    div {
      width: 100%;
      display: flex;
      gap: 0.625rem; // 10px
      justify-content: center;
    }
  }
`;
