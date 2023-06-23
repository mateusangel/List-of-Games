import axios from "axios";
import { Err } from "../Error/Error";
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
    };
    try {
      const res = await this.axios.get("/data", config);
      return res.data;
    } catch (err) {
      Err(err.status);
      throw new HandleError();
    }
  }
}
