import axios from "axios";

class CatFact {
  constructor(args) {
    this.id = args.id;
    this.fact = args.fact;
  }
}

class CatFactsAPI {

  constructor() {
    this.apiClient = axios.create({
      baseURL: "/",
      timeout: 60000,
    });
  }

  getFact() {
    return this.apiClient.get("/fact").then(resp => {
      const respData = resp.data;
      const cat_fact = new CatFact({
        fact: respData.fact,
      });

      return cat_fact;
    });
  }
}
export default CatFactsAPI;
