"use strict";
// ============= Transform string =============

// function transformString(str) {
//   return str
//     .split("")
//     .map(
//       (char, index) =>
//         `${char.toUpperCase()}${char.toLowerCase().repeat(index)}`
//     )
//     .join("-");
// }
// console.log(transformString("afcvh"));

// ============== Pattern module ====================

// function incrementorManager(num) {
//   let number = num;
//   return {
//     increment() {
//       return ++number;
//     },
//     reset() {
//       number = num;
//       return number;
//     },
//   };
// }

// const incrementor = incrementorManager(3);
// console.log(incrementor.increment()); // 4
// console.log(incrementor.increment()); // 5
// console.log(incrementor.reset()); // 3
// console.log(incrementor.reset());
// console.log(incrementor.increment()); // 4
// console.log(incrementor.increment());
// console.log(incrementor.increment());
// console.log(incrementor.reset());

// ================= Trade actions ============

// let prices1 = [7, 1, 5, 3, 6, 4];
// let prices2 = [7, 6, 4, 3, 1];
// let prices3 = [7, 6, 4, 3, 1, 45, 67, 5, 78, 34, 3];
// let maxProfit = function (prices) {
//   let min = Math.min(...prices);
//   let sample = prices.slice(prices.indexOf(min) + 1);
//   let max = Math.max(...sample);
//   let result = max - min;
//   return result > 0 ? result : 0;
// };

// console.log(maxProfit(prices3));

// ============== Intersection arrays =================

// const input1 = [1, 2, 2, 1];
// const input2 = [2, 2];
// output [2, 2];
// const input3 = [4, 9, 5];
// const input4 = [9, 4, 9, 8, 4];
//output [4, 9] or [9, 4]

// const intersect = function (nums1, nums2) {
//   let res = [];
//   for (let item of nums1) {
//     if (nums2.includes(item)) {
//       res.push(item);
//     }
//   }
//   return res;
// };
// console.log(intersect(input1, input2));
// console.log(intersect(input3, input4));

// ========== First unique char ==============

// const input1 = "leetcode"; // 0
// const input2 = "loveleetcode"; // 2
// const input3 = "aabb"; // -1

// const firstUniqChar = function (s) {
//   let clone = s;
//   let arr = clone.split("").reduce((acc, i) => {
//     if (acc.hasOwnProperty(i)) {
//       acc[i] = acc[i] + 1;
//     } else {
//       acc[i] = 0;
//     }
//     return acc;
//   }, {});
//   console.log(arr);
//   let char = Object.entries(arr).find(([item1, item2]) => {
//     if (item2 === 0) {
//       return item1;
//     }
//   });
//   console.log(char);
//   console.log(s);
//   return char?.[0] ? s.indexOf(char[0]) : -1;
// };

// console.log(firstUniqChar(input1));
// console.log(firstUniqChar(input2));
// console.log(firstUniqChar(input3));

// ============== Matrix islands ================================

// let grid1 = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

// let grid2 = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];

// let numIslands = function (grid) {
//   let islands = [];
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         islands.push(j);
//       }
//     }
//   }

//   return islands.length;
// };
// console.log(numIslands(grid1));
// console.log(numIslands(grid2));

//==========================

// const promise = new Promise((res, reject) => {
//   res(2);
// })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .catch((er) => console.log(er.name));

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   });
// }

// Запрашивать логин, пока github не вернёт существующего пользователя.

// function rowSumOddNumbers(n) {
//   let arr = [1];
//   if (n === 1) return 1;
//   if (n === 2) return 8;
//   let arr2 = [];
//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i === n) {
//         arr2.push(arr[arr.length - 1] + 2);
//       }
//       arr.push(arr[arr.length - 1] + 2);
//       if (i === 42) {
//       }
//     }
//   }
//   return arr2.reduce((acc, i) => (acc += i));
// }

// function findShort(s) {
//   let arr = [];
//   s.split(" ").forEach((i) => arr.push(i.length));
//   return Math.max(...arr);
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// const base = "https://image.tmdb.org/t/p/w500/";
// fetch(
//   "https://api.themoviedb.org/3/discover/movie?with_text_query=Avengers&api_key=024245b5b5625fd11e26dff140d27008"
// )
//   .then((data) => data.json())
//   // .then((prop) => console.log(prop));
//   .then((data) => showImg(data));

// const showImg = (movies) => {
//   const path = movies.results[0].poster_path;
//   const img = document.createElement("img");
//   img.src = base + path;
//   img.classList.add("default", "fadeIn");

//   img.classList.replace("fadeIn", "fadeOut");
//   document.body.append(img);
// };

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return `no one likes this`;
//       break;
//     case 1:
//       return `${names[0]} likes this`;
//       break;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//       break;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       break;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//       break;
//   }
// }

// console.log(likes(["Alex", "Jacob"]));
// $(document).ready(function () {
//   $("input[type=text]").focus(function () {
//     $("input[type=password]").attr("disabled", "disabled");
//   });
//   $("input[type=password]").click(function (e) {
//     $("input[name=check]").each(function () {
//       var val = $(this).val();
//       alert(val);
//     });
//     e.preventdefault();
//   });
// });
const foo = document.querySelector(".foo");
function counter(){
    if(foo.innerHTML == 3600) clearInterval(interval);
    foo.innerHTML = +foo.innerHTML + 1;
}
const interval = setInterval(counter, 1000)
document.addEventListener("visibilitychange", ()=>{
    console.log("Oppa!!!");
    foo.innerHTML = +foo.innerHTML + 300;

}
)