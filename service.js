//setTimeout(() => {
 //   console.log("kousai")
//}, 5000) 

import axios from "axios";
//fetch("https://jsonplaceholder.typicode.com/users/1").then((data) => data.json())
//.then((user )=> {
//    console.log(user)
//})
//async function getData() {
 //   const data = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
 //   console.log(data)
//}
//getData();
//fetch("https://jsonplaceholder.typicode.com/users/1").then((data) => data.json())
//.then((user )=> {
 //   console.log(user)
//})
const getUsers =() => {
    return new Promise(async (resolve, rejct) => {
        const { data } =await axios("https://jsonplaceholder.typicode.com/users/1");
        resolve(data);
        rejct("you have proplem");
    } );
};
const getPost = (post_Id) => {
    return new Promise(async (resolve, rejct) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_Id);
        resolve(data);
        rejct("you have Problem")
    });
};
(async () => {
    try {
        const users = await getUsers();
        const post = await getPost(1);
        console.log( users);
        console.log( post);
    }
    catch(e)  {
        console.log(e);
        
    }
    
})();
//async function getData() {
 //   const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/1");
  //  const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/1");
  //  console.log("user", users);
   // console.log("post", post)
//}
//getData();