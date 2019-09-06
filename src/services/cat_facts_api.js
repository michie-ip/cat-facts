import axios from "axios";

class CatFact {
  constructor(args) {
    this.id = args.id;
    this.fact = args.fact;
  }
}

class CatFactsAPI {

  constructor() {
    this.baseURL = "https://cat-fact.herokuapp.com";
    this.apiClient = axios.create({
      baseURL: this.baseURL,
      timeout: 60000,
    });
  }

  getFacts() {
    return this.apiClient.get("/facts").then(resp => {
      const respData = resp.data;
      const facts = respData.all.map((fact) => {
        const fact = new CatFact({
          id: fact._id,
          fact: fact.text,
        });
      });

      return facts;
    });
  }
}
export default CatFactsAPI;
