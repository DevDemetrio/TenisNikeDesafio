import { styled } from "styled-components";

const BannerSection = styled.section`
  display: flex;
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 120px;
  background-size: 100%;
  min-height: 377px;

  @media (min-width: 1070px) {
    background-image: ${(props) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.$desktopBackground})`};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const TextContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 1070px) {
    margin-left: 120px;
    text-align: left;
  }
`;

const BannerTitle = styled.h1`
  margin-bottom: 12px;
  font-size: 1.75rem;
  color: rgba(249, 249, 249, 1);

  @media (min-width: 1300px) {
    font-size: 2rem;
  }
`;
const BannerText = styled.p`
  width: 357px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 28px;
  color: rgba(249, 249, 249, 1);

  @media (min-width: 1300px) {
    font-size: 1.2rem;
  }
`;

const Banner = ({ backgroundImage, title, text, desktopBackground }) => {
  return (
    <BannerSection
      $backgroundImage={backgroundImage}
      $desktopBackground={desktopBackground}
    >
      <TextContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerText>{text}</BannerText>
      </TextContainer>
    </BannerSection>
  );
};

export default Banner;
