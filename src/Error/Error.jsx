import { HandleError } from "./HandleError";

export const Err = (status) => {
  if (
    status !== 500 &&
    status !== 502 &&
    status !== 503 &&
    status !== 504 &&
    status !== 507 &&
    status !== 508 &&
    status !== 509
  ) {
    throw new HandleError(
      "O servidor falhou em responder, tente recarregar a página."
    );
  } else {
    throw new HandleError(
      "O servidor não conseguiu responder por agora, tente novamente mais tarde."
    );
  }
};
