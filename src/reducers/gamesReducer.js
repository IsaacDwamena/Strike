const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;

// import { createSlice } from "@reduxjs/toolkit";

// const gamesReducer = createSlice({
//   name: "gamesReducer",
//   initialState: { popular: [], newGames: [], upcoming: [], searched: [] },
//   reducers: {
//     FETCH_GAMES(state, action) {
//       state.FECTH_GAMES({
//         ...state,
//         popular: action.payload.popular,
//         upcoming: action.payload.upcoming,
//         newGames: action.payload.newGames,
//       });
//     },
//   },
// });

// export const actions = gamesReducer.actions;

// export default gamesReducer;
