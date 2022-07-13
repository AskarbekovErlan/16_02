// const array = [
//     {
//         username:'Jack',
//         full_name: 'Jack Barbaro'
//     },
//     {
//         username:'Jack',
//         full_name: 'Jack Barbaro'
//     },
//     {
//         username:'Jack',
//         full_name: 'Jack Barbaro'
//     },
//     {
//         username:'Jack',
//         full_name: 'Jack Barbaro'
//     },
//     {
//         username:'Jack',
//         full_name: 'Jack Barbaro'
//     },
// ]
// // *******
//
// for(let i = 0; i < array.length; i++ ){
//     console.log((array[i]))  // index
//     if(i===2){
//         break
//     }
// }
//// *******
// for(let user of array ){
//     console.log((user)) //element
// }
//// *******
// for(let key in obj){
//     console.log(obj[key])
// // }
////// *******
// let i = 0;
// while(i < 5){
//     console.log('Hello');
//     i++
// }
// *******
//  const users = [
//      {
//          usrename: 'jack',
//          salary: 500
//      },
//      {
//          usrename: 'jhon',
//          salary: 5000
//      },
//      {
//          usrename: 'joe',
//          salary: 10000
//      },
//  ]
// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)
//

let str = "*";
while (str.length<=7){
    console.log(str + "\n");
    str+="*";
}

for (i = 1; i <= 100; i ++) {
   if ((i % 3 === 0) && (i % 5 === 0))
           console.log('FizzBuzz');
    else if (i % 3 === 0)
           console.log('Fizz');
    else if (i % 5 === 0)
           console.log('Buzz');
    else
       console.log(i);
}