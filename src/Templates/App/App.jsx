import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Api } from "../../Service/Api";
import { Loade } from "../../Components/Loader/Loade";

export function App() {
  const [verdadeiro, setfalso] = useState(false);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const api = new Api();
      try {
        const timeoutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(
              new Error("O servidor demorou para responder, tente mais tarde")
            );
            setfalso(true);
          }, 5000);
          return;
        });
        const resultado = await Promise.race([api.Cadastro(), timeoutPromise]);
        setfalso(true);
        console.log(resultado);
        return resultado;
      } catch (err) {
        setfalso(true);
        console.error(err.message);
        return;
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <>
      {verdadeiro ? verdadeiro : <Loade />}
      <Header />
    </>
  );
}
