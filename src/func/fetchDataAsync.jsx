import { CustomError, Errorr } from "../Error/HandleError";
import { Api } from "../Service/Api";

export async function fetchDataAsync() {
  const api = new Api();
  try {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(async () => {
        reject(
          new Error("O servidor demorou para responder, tente mais tarde")
        );
      }, 5000);
    });
    const resultado = await Promise.race([api.Cadastro(), timeoutPromise]);
    return resultado;
  } catch (err) {
    if (err.status > 500 && err.status < 509) {
      throw new CustomError(
        "O servidor falhou em responder, tente recarregar a página.",
        err.status
      );
    } else {
      throw new Errorr(
        "O servidor não conseguiu responder por agora, tente novamente mais tarde.",
        err.status
      );
    }
  }
}
