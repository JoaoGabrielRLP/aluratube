import React from "react"
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu/Index"
import { StyledTimeline } from "../src/components/Timeline"
import { StyledFooter } from "../src/components/Footer"

function HomePage() {
  const estilosDaHomePage = { 
    // backgroundColor: "red" 
};

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
    
    <CSSReset />
    <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
    }}>
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
      <Footer usuarios={config.favorites}/>
    </div>

    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  .foto-perfil {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ bg }) => bg});
  height: 230px;
  background-position-y: -105px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg}/>
      <section className="user-info">
        <img className="foto-perfil" src={`https://github.com/${config.github}.png`} />

        <div>
          <h2>{config.name}</h2>

          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({searchValue, ...propriedades}) {
  const playlistsNames = Object.keys(propriedades.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) =>{
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />

                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Footer(propriedades){
  
  return (
    
      <StyledFooter>
        
      </StyledFooter>

    );
    
    
}
