export const ReduceFn = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        result: action.payload,
        load: false,
        apiLoaded: true,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        load: false,
      };
    case "SET_SELECTED_GENRE":
      return {
        ...state,
        selectedGenre: action.payload,
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };
    case "SUCCESS":
      return {
        ...state,
        load: false, // Definir load como falso quando as informações forem carregadas com sucesso
        gameDetails: action.payload,
        errorGame: null,
      };
    case "ERROR":
      return {
        ...state,
        load: false, // Definir load como falso em caso de erro
        errorGame: action.payload,
      };
    default:
      return state;
  }
};
