const axios = require("axios");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = "http://localhost:8000/";
  }

  getFullList() {
    axios.get(this.baseUrl + "/characters");
  }

  getOneRegister(charId) {
    axios.get(`${this.baseUrl}/characters/${charId}`);
  }

  createOneRegister(newCharacter) {
    axios.post(this.baseUrl + "/characters", newCharacter);
  }

  updateOneRegister(charId, updatedChar) {
    axios.put(`${this.baseUrl}/characters/${charId}`, updatedChar);
  }

  deleteOneRegister(charId) {
    axios.delete(`${this.baseUrl}/characters/${charId}`);
  }
}
