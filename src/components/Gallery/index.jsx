import Imagem from "./Imagem";
import { styled } from "styled-components";

const Teste = styled.div`
  @media (min-width: 793px) {
    display: flex;
    padding: 0 10px;
    flex-wrap: wrap;
    gap: 16px;
    margin: 0 auto;
    width: 800px;
  }

  @media (min-width: 1230px) {
    padding: none;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin: 0 auto;
    width: 100%;
    max-width: 1301px;
  }
`;
const Gallery = ({ photos = [], thePhotoSelected, toggleFavorite }) => {
  return (
    <Teste>
      {photos.map((photo) => (
        <Imagem
          requestedZoom={thePhotoSelected}
          toggleFavorite={toggleFavorite}
          key={photo.id}
          photo={photo}
        />
      ))}
    </Teste>
  );
};

export default Gallery;
