import Unsplash, { toJson } from "unsplash-js"

const unsplash = new Unsplash({
  applicationId: "8017de593706b76df7560b74f125e9be0266bc6c5ff9b4241cfa42ab05bd69ac",
  secret: "d6a07c3ae56a1392c9801b6428aaecf1fe5f8d93f618d861061c908eb007f776"
});

function getRandomCat() {
  return unsplash.photos.getRandomPhoto({query: "cat"})
    .then(toJson)
    .then(json => {
      // console.log(json)
      return json.urls
    });
}

function getCatList() {
  return unsplash.search.photos('cat', 1, 12)
      .then(toJson)
      .then(json => {
        // console.log(json)
        return json.results
    });
}

export default {getRandomCat, getCatList};

