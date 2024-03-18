import { styled } from "styled-components";

const HignlightsContainer = styled.section`
  margin: 6.125rem auto 0 auto;
  div {
    text-align: center;
    width: 22.3125rem;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
    padding: 0 0.625rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
  @media (min-width: 1030px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
      padding: 0 0.625rem;
      line-height: 1.75rem;
      font-weight: 500;
    }
  }
`;
const Highlights = () => {
  return (
    <HignlightsContainer>
      <div>
        <h2>Destaques</h2>
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </p>
      </div>
    </HignlightsContainer>
  );
};

export default Highlights;
