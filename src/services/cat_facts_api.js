import axios from "axios";

class CatFact {
  constructor(args) {
    this.id = args.id;
    this.fact = args.fact;
  }
}

class CatFactsAPI {

  constructor() {
<<<<<<< HEAD
    this.baseURL = "https://catfact.ninja";
=======
>>>>>>> 9450f0cf02aca85ff9fb05f8560304d66e2661ec
    this.apiClient = axios.create({
      baseURL: "/",
      timeout: 60000,
    });
  }

<<<<<<< HEAD
  getFacts() {
    return this.apiClient.get("/fact").then(resp => {
      const respData = resp.data;
      const facts = respData.all.map((fact) => {
        const cat_fact = new CatFact({
          fact: fact.fact,
        });
        return cat_fact
=======
  getFact() {
    return this.apiClient.get("/fact").then(resp => {
      const respData = resp.data;
      const cat_fact = new CatFact({
        fact: respData.fact,
>>>>>>> 9450f0cf02aca85ff9fb05f8560304d66e2661ec
      });

      return cat_fact;
    });
  }
}
export default CatFactsAPI;
