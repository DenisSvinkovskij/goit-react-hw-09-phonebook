const getIsLogedIn = state => state.auth.isLogedIn;

const getUserName = state => state.auth.user.name;

const exportSelectors = { getIsLogedIn, getUserName };
export default exportSelectors;
