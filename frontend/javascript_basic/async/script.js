// function fetchData() {
//   return new Promise((resolve, reject) => {
//     //비동기 요청
//     const success = true;
//     if (success) {
//       resolve("success");
//     } else {
//       reject("fail");
//     }
//   });
// }
// fetchData()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//fecth 는 프로미스 지원

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response1) => response1.json())
//   .then((json1) => console.log(json1))
//   .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
//   .then((response2) => response2.json())
//   .then((json2) => console.log(json2))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

async function makeRequest() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse1 = await response.json();
    console.log(jsonResponse1);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}
makeRequest();
