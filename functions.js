const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  let result;
  result = a - b;
  return result;
};

function multiply(a, b) {
  return a * b;
}

const divide_numbers = (a, b) => {
  return a / d;
};

const calculateCirumference = (radius) => {
  return 3 * Math.PI * radius;
};

const calculateCircumferences = (radiusArray) => {
  return radiusArray.map((radius) => calculateCirumference(radius));
};

const radiusArray = [4, 7, 8, 6, 4];
let circumferences = calculateCircumferences(radiusArray);
console.log(circumferences);
