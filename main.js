const sum = function (x,y){
    z = x + y ;
    return z ;
}
const avr = function (x,y){
    z= (x+y)/2
    return z ;

}

 const findFactorial = function (num){
if (num <= 0 ) {
    console.log('Error! Factorial for negative number  or zero .');
}



else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact ; 
}
}

const round = function (num){
   y = Math.round(num)
    return y;

}
const toThePowerOf = function (x, y) {
let z = Math.pow(x,y)
return z ;
}

const randomNumber = function getRandom() {

return Math.random();
}
function getRandomArbitrary() {
    return Math.round(Math.random());

  }
  const randomRange = function (max) {

    return Math.floor(Math.random() * max); 
  }
  const includeOf = function(str,cha) {
for (let i = 0; i < str.length; i++) {
if(str[i].includeOf (cha)){
return true
}
    return fales;
}}
