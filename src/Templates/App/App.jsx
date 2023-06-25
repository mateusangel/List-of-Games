import { useEffect, useReducer } from "react";
import { Header } from "../../Components/Header/Header";
import { fetchDataAsync } from "../../func/fetchDataAsync";
import { Loade } from "../../Components/Loader/Loade";
import { MainStyled } from "../../Components/Main/MainStyled";
import { Card } from "../../Components/Cards/Card";
import { Modal } from "../../Components/ModalError/Modal";
import { Selection } from "../../Components/Selection/Selection";
import { Footer } from "../../Components/Footer/Footer";
import { TypeOfGames } from "../../Components/Logo/TypeOfGames";
import { Input } from "../../Components/input/Input";

import { InitialState } from "../../Global/InitialState";
import { ReduceFn } from "../../Reduce/ReduceFn";
import { ModalDescription } from "../../Components/ModalDescription/ModalDescription";

export function App() {
  const [state, dispatch] = useReducer(ReduceFn, InitialState);
  const {
    load,
    result,
    error,
    selectedGenre,
    apiLoaded,
    searchText,
    selectedCard,
  } = state;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const resultado = await fetchDataAsync();
      dispatch({ type: "FETCH_SUCCESS", payload: resultado });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  }

  function handleGenreChange(selectedOption) {
    dispatch({ type: "SET_SELECTED_GENRE", payload: selectedOption?.value });
  }

  function handleSearchTextChange(text) {
    dispatch({ type: "SET_SEARCH_TEXT", payload: text });
  }

  const filteredResult = result.filter((res) =>
    res.title.toLowerCase().includes(searchText.toLowerCase())
  );

  function handleModalDescription(card) {
    dispatch({ type: "SET_SELECTED_CARD", payload: card });
  }

  return (
    <>
      <Header>
        <TypeOfGames />
        <Input onChange={handleSearchTextChange} />
      </Header>
      <Selection onChange={handleGenreChange} />
      {selectedCard && (
        <ModalDescription
          selectedCard={selectedCard}
          onClose={handleModalDescription}
        />
      )}
      {load ? (
        <Loade />
      ) : (
        <MainStyled>
          {filteredResult
            .filter((res) =>
              selectedGenre ? res.genre === selectedGenre : true
            )
            .map((res) => (
              <Card key={res.id} onClick={() => handleModalDescription(res)}>
                <h1>{res.title}</h1>
                <p>{res.genre}</p>
                <h3>{res.publisher}</h3>
                <h4>{res.release_date}</h4>
                <img src={res.thumbnail} alt={res.short_description} />
              </Card>
            ))}
        </MainStyled>
      )}
      {apiLoaded && <Footer />}
      {error && <Modal>{error}</Modal>}
    </>
  );
}
