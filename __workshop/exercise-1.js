// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  const myPromise = new Promise((resolve, reject) => {
    if (
      array.every((element) => {
        return typeof element === "string";
      })
    ) {
      const newArray = array.map((element) => {
        return element.toUpperCase();
      });
      resolve(newArray);
    } else {
      reject("not a string.");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  return array.sort();
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
