// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../animate";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, image, id }) => {
  const stringpathId = id.toString();
  // Load Deatails
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
      layoutId={stringpathId}
    >
      <Link to={`/game/${id}`}>
        <motion.img layoutId={`image ${stringpathId}`} src={image} alt={name} />
        <h3>{name}</h3>
        <p>{released}</p>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  background: #202020;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
