//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();

  // //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId}>
            <Container>
              <Stats>
                <div className="rating">
                  <motion.h3>{game.name}</motion.h3>
                  <p>Rating: {game.rating}</p>
                  {getStars()}
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {game.platforms.map((data) => (
                      <img
                        alt={data.platform.name}
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                      ></img>
                    ))}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  layoutId={`image ${pathId}`}
                  src={game.background_image}
                  alt={game.background_image}
                />
              </Media>
              <Description>
                <p>{game.description_raw}</p>
              </Description>
              <div className="gallery">
                {screen.results.map((screen) => (
                  <img src={screen.image} key={screen.id} alt={screen.image} />
                ))}
              </div>
            </Container>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 80%, 0.6);
    border-radius: 25px;
  }

  &::-webkit-scrollbar-track {
    background: #202020;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 3rem 0rem;
  background: white;
  position: absolute;
  left: 10%;
  top: 5%;
  background: #151515;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Container = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: start;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
const Info = styled(motion.div)``;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  p {
    color: white;
    font-size: 1rem;
  }
`;

export default GameDetail;
