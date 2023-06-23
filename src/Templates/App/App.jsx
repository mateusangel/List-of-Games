import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { fetchDataAsync } from "../../func/fetchDataAsync";
import { Loade } from "../../Components/Loader/Loade";
import { MainStyled } from "../../Components/Main/MainStyled";
import { Card } from "../../Components/Cards/Card";

import { Modal } from "../../Components/ModalError/Modal";

export function App() {
  const [carregando, setCarregando] = useState(true);
  const [result, setresult] = useState([]);
  const [error, seterro] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const resultado = await fetchDataAsync();
      setresult(resultado);
    } catch (err) {
      seterro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <Header />
      {carregando ? (
        <Loade />
      ) : (
        <MainStyled>
          {result.map((res) => (
            <Card key={res.id}>
              <h1>{res.title}</h1>
              <img src={res.thumbnail} alt={res.short_description} />
            </Card>
          ))}
        </MainStyled>
      )}
      {error && <Modal>{error}</Modal>}
    </>
  );
}
