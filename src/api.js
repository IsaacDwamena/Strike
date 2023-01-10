// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_GAMEWEBSITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames_games = `games?key=${process.env.REACT_APP_GAMEWEBSITE_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames_games = `games?key=${process.env.REACT_APP_GAMEWEBSITE_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames_games}`;
export const newGamesURL = () => `${base_url}${newGames_games}`;

// Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${process.env.REACT_APP_GAMEWEBSITE_API}`;

// Game Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${process.env.REACT_APP_GAMEWEBSITE_API}`;

// Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?&key=${process.env.REACT_APP_GAMEWEBSITE_API}&search=${game_name}&page_size=10`;
