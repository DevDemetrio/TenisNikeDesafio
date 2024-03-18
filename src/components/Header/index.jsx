import { styled } from "styled-components";

const HeaderStyled = styled.header`
  background-color: #000;
`;
const DivStyledPromotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "MontserratBold";
  height: 3.75rem;
  font-size: 1rem;
  background-color: #00aeff;

  @media (min-width: 1030px) {
    font-size: 1.3rem;
  }
`;
const DivName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  height: 3.75rem;
  font-size: 1.5rem;
  background-color: #f9f9f9;
  text-align: center;

  @media (min-width: 1030px) {
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <DivStyledPromotion>
        <p>Ganhe R$10,00 de desconto no frete</p>
      </DivStyledPromotion>
      <DivName>
        <p>JordanShoes</p>
      </DivName>
    </HeaderStyled>
  );
};

export default Header;
