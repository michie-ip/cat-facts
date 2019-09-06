import axios from "axios";

class CatFact {
  constructor(args) {
    this.id = args.id;
    this.fact = args.fact;
  }
}

class CatFactsAPI {

  constructor() {
    this.baseURL = "https://catfact.ninja";
    this.apiClient = axios.create({
      baseURL: this.baseURL,
      timeout: 60000,
    });
  }

  getFacts() {
    return this.apiClient.get("/fact").then(resp => {
      const respData = resp.data;
      const facts = respData.all.map((fact) => {
        const cat_fact = new CatFact({
          fact: fact.fact,
        });
        return cat_fact
      });

      return facts;
    });
  }
}
export default CatFactsAPI;
