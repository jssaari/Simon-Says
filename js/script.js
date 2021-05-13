'use strict';
const simon = [];
const addSimon = function () {
  const randDir = ['up', 'right', 'down', 'left'];
  let randNum = Math.trunc(Math.random() * 4);
  simon.push(String(randDir[randNum]));
  simonSays();
  //   console.log(randNum);
};
const simonSays = function () {
  console.clear();
  console.log(simon[simon.length - 1]);
  promptSimon();
};
const promptSimon = function () {
  let simonHears; //= prompt('What did Simon say?');
  let simonSaid = String([...simon]);
  //   console.log(typeof simonSaid);
  if (simonHears === simonSaid) addSimon();
};
console.log(addSimon());
console.log(simon);
