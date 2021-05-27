const a = 23;
const b = 2;
const c = 3;
    let figure = (a < b + c && b < a + c && c < a + b) ? 'triangle' : 'not triangle';
    console.log("figure is " + figure);