const getAvailableWidth = (): number => {
  // right now let's just say 800
  return 800;
}

// when a row is added in between other rows the rows after need to have their index incremented
const addNewCategoryRow(categoryMapping, minIndexToUpdate) => {

}

/*
 * Returns a spacial representation of rows derived from
 * their dependencies. So if a category depends on another category
 * it will be below (at a higher index) another category
 * We assume that the categories array is valid, meaning that
 */
const getHierarchalRepresentationOfCategories = (categories: Categories[]): Categories[][] => {
  const hierarchalRepresentation = [[]];
  // the id to the location
  let categoryMapping = {};

  // The algorithm: the key is the recursive nature that gurantees that the current layer added won't be ursurped by new earlier/middle layers
  // look at a category, then get what it depends on
  // get each dependency, and if it isn't yet represented recursive call the same function on it
  // get highest index in the loop too
    // add current category to categoryMapping and hierarchal representation

  categories.forEach(category => {

  });

  return hierarchalRepresentation;
};

export {};
