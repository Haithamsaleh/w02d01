let addToArray = function (Array,str) {
    Array.push(str)
return Array;
}
const convertToString = function (array_1) {

return array_1.join(' ')

}
const updateOrCreate = function (array, index, value) {
 if (index > array.length) {
    array[index]= value

     return "there is no element to updated in this index";
     
 }else{
    array[index]= value
return array ;
}}
const onlyString = function (array) {

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "Number") {
        result.slice(array[i]);
return array;
 }


    }
}  
const users = [
    ["Jane", "123456" ],
    ["admin", "abc123" ],
  ];
  const login = function (username, password) {

    // if (username == users[0][0]  &&  password == users [0][1]){
    //     return 'Login Successful' ;
    // }else if (username == users[1][0] && password == users [1][1]){
    //     return "Login Successful ";
    // }else{
    //     return " Login Failed";

    // }
    for (let i = 0; i <=1; ++i) {
        if (username == users[0][i]  &&  password == users [0][i]){
                return 'Login Successful' ;

  }return 'Login Failed';}}
