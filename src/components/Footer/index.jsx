import { styled } from "styled-components";

const FooterStyled = styled.footer`
  height: 3.75rem;
  margin-top: 120px;
  padding: 12px 77px;
  background-color: rgba(0, 174, 255, 1);

  p {
    margin-top: 12px;
    text-align: center;
  }
`;
const Footer = () => {
  return (
    <FooterStyled>
      <p>Todos os direitos reservados.</p>
    </FooterStyled>
  );
};

export default Footer;
