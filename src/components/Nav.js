import logo from "../img/logo.png";
// Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animate";

// Redux
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Strike</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="Search games"
        />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 0rem;
  text-align: center;
  width: 85%;
  margin: 0 auto;

  form {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;

    input {
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
      border: none;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
      background: hsla(0, 0%, 100%, 0.6);
      outline: none;
      border-radius: 25px;
      width: 85%;

      &:focus {
        background: #fff;
      }
    }

    button {
      font-size: 1.5rem;
      border: none;
      padding: 0.5rem 2rem;
      cursor: pointer;
      background: #202020;
      color: white;
      border-radius: 25px;

      &:hover {
        color: hsla(0, 0%, 80%, 0.6);
      }
    }

    @media (max-width: 420px) {
      flex-direction: column;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: white;
  font-size: 2rem;

  img {
    height: 3rem;
    width: 3rem;
    margin-right: 0.5rem;
  }
`;

export default Nav;
