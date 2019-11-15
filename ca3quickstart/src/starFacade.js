import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";

const starFacade = (function() {
  function FetchStar(id) {
    const options = makeOptions("GET", true);
    const us = fetch(
      configuration.URL + "/api/starwars/starWars/" + id,
      options
    ).then(handleHttpErrors);
    console.log(configuration.URL + "/api/starwars/starWars/" + id);
    return us;
  }

  return {
    FetchStar: FetchStar
  };
})();

export default starFacade;
