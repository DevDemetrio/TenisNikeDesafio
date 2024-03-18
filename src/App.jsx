import { styled } from "styled-components";
import Banner from "./components/Banner";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import bannerBackground from "./assets/Air-jordan.png";
import desktopBackground from "./assets/Air-Jordan-desktop.png";
import Highlights from "./components/highlights";
import phonto from "./img.json";
import Gallery from "./components/Gallery";
import { useState } from "react";
import Footer from "./components/Footer";
import ModalZoom from "./components/ModalZoom";

const ContaineMain = styled.main``;

const App = () => {
  const [photoGallery, setPhotoGallery] = useState(phonto);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }
    setPhotoGallery(
      photoGallery.map((photoGallery) => {
        return {
          ...photoGallery,
          favorite:
            photoGallery.id === photo.id
              ? !photo.favorite
              : photoGallery.favorite,
        };
      })
    );
  };
  return (
    <>
      <EstilosGlobais />
      <Header />
      <ContaineMain>
        <Banner
          backgroundImage={bannerBackground}
          desktopBackground={desktopBackground}
          title={"A melhor loja de Jordan"}
          text={
            "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
          }
        />
        <Highlights />
        <Gallery
          thePhotoSelected={(photo) => setSelectedPhoto(photo)}
          toggleFavorite={toggleFavorite}
          photos={photoGallery}
        />
      </ContaineMain>
      <Footer />
      <ModalZoom
        photo={selectedPhoto}
        toggleFavorite={toggleFavorite}
        theClose={() => setSelectedPhoto(null)}
      />
    </>
  );
};

export default App;
