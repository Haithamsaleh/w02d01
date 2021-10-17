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
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        result.push(array[i]);
      }
    }
    return result;
  };
 
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
    for(let i=0;i<users.length;i++)
    {
        if( username == users[i][0] && password == users[i][1])
        {
           return "Login Successful";
        }
    }
    return "Login Failed"
  
  };

  const maximumNumber = function (num) {
      return Math.max.apply(null, num);
  };
  
  const reversString = function (string) {
     arr=string.split('');
     rev=arr.reverse();
     join= rev.join("");
    
     return rev;
  };