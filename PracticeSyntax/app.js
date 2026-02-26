// const exmp = () => {
//   return new Promise((resolve, reject) => {
//     let seconds = 5;
//     console.log(`Starting countdown: ${seconds} seconds`);

//     const interval = setInterval(() => {
//       seconds--;
//       if (seconds > 0) {
//         console.log(`${seconds}second remaining`);
//       } else {
//         clearInterval(interval);
//         console.log("Task completed");
//         reject();
//       }
//     }, 1000);
//   });
// };

// async function run() {
//   try {
//     await exmp();
//     console.log("promise fulfilled");
//   } catch {
//     console.log("promise failed");
//   }
// }

// run();

// const emp = {
//   id: "17",
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 2000,
//     price: 1000.99,
//     "AT":500,
//     "CPU model": "Intel Core i9",
//     "Hard disk size": "1 TB",
//   },
//   createdAt: "2022-11-21T20:06:23.986Z",
// };

// async function api() {
//   const data = await fetch(
//     "https://api.restful-api.dev/objects",

//     {
//       method: "Post",
//       headers: {
//         "content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(emp),
//     },
//   );
//   // console.log(data);
//   let txt = await data.json();
//   console.log(txt);
// }

// api();

//DELETE
const emp = {
  id: "17",
  name: "Apple MacBook Pro 16",
  data: {
    year: 2000,
    price: 1000.99,
    AT: 500,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
  },
  createdAt: "2022-11-21T20:06:23.986Z",
};

async function api() {
  const data = await fetch(
    "https://api.restful-api.dev/objects/6",

    {
      method: "DELETE",
    },
  );
  // console.log(data);
  let txt = await data.json();
  console.log(txt);
}

api();
