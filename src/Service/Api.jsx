import axios from "axios";
import { HandleError } from "../Error/HandleError";

export class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://games-test-api-81e9fb0d564a.herokuapp.com/api/",
    });
  }

  async Cadastro() {
    const config = {
      headers: {
        "dev-email-address": "mateusangeljr@gmail.com",
      },
      params: {
        limit: 20,
      },
    };
    try {
      const res = await this.axios.get("/data", config);
      return res.data;
    } catch (err) {
      try {
        throw new HandleError(
          "O servidor não conseguiu responder por agora, tente novamente mais tarde.",
          500
        );
      } catch (err) {
        console.log(err.message);
      }
    }
  }
}
