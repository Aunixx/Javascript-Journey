"use strict";

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1995 && birthYear <= 2010) {
      //creating new variable with same name as outer scope's variable
      const firstName = "Steven";
      var millenial = true;
      const str = `Oh, you're a millenial, ${firstName}`;
      //reassigning outer scope's variable
      output = "New Output";

      console.log(str);
    }
    console.log(output);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = "Sahil";
calcAge(2000);
