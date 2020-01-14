import { handleHttpErrors, makeOptions } from "../utils";
import configuration from "../settings";

const URL = configuration.URL;

const recipeFacade = (function() {
  const emptyRecipe = {
    title: "",
    preparationTime: 0,
    directions: ""
  };

  function fetchAllRecipes() {
    const options = makeOptions("GET", true);
    const result = fetch(URL + "/all/", options).then(handleHttpErrors);
    return result;
  }

  function addEditRecipe(recipe) {
    let options;
    if (typeof recipe.id === "undefined") {
      options = makeOptions("POST", true, recipe);
    } else {
      options = makeOptions("PUT", true, recipe);
    }
    return fetch(URL, options).then(handleHttpErrors);
  }

  function deleteRecipe(id) {
    const options = makeOptions("DELETE", true);
    return fetch(URL + "/" + id, options).then(handleHttpErrors);
  }

  /* function fetchAllPlans() {
    const result = fetch(URL + "/plans/", options).then(
      handleHttpErrors
    );
    return result;
  } */

  function savePlan(plan) {
    options = makeOptions("POST", true, recipe);
    const result = fetch(URL + "/plans/", options).then(handleHttpErrors);
    return result;
  }

  return {
    fetchAllRecipes: fetchAllRecipes,
    addEditRecipe: addEditRecipe,
    deleteRecipe: deleteRecipe,
    savePlan: savePlan
  };
})();

export default recipeFacade;
