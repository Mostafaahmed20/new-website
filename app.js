let bird1 = document.getElementById('gobird1')
let bird2 = document.getElementById('gobird2')
let bird3 = document.getElementById('gobird3')
let timer = document.getElementById('timer') 
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let hours = document.getElementById('hours')



function runtime() {
let date = new Date()
let seconds = date.getSeconds()
let minutes = date.getMinutes()
let hours = date.getHours()
  return  timer.innerHTML = `<h3>${hours}</h3> : <h3>${minutes}</h3>  :  <h3> ${seconds} </h3>`;
}



setInterval(runtime , 1000)



// let clockinterval = await setInterval(runtime , 1000)

// // timer.innerHTML = clockinterval



// function maketimer() {  
//  let seconds = date.getSeconds()
//  let minutes = date.getMinutes()
//  let hours = date.getHours()

// return 

// }


// timer.textContent = `${seconds} ${minutes} ${hours}`


function moveBird1() {
  let topoffest =  Math.random().toFixed(2) * (window.innerWidth - bird1.clientWidth);
  let leftoffset = Math.random().toFixed(2) * (window.innerHeight - bird1.clientHeight);
console.log('bird one')
  // let topoffest = Math.floor(Math.random()- window.innerWidth - bird1.clientWidth )
  // let leftoffset = Math.random() * (window.innerHeight - bird1.clientHeight);
  bird1.style.top = topoffest + 'px';
  bird1.style.left = leftoffset + 'px';
 
}

function moveBird2() {
  console.log('bird two')
  let topoffest = Math.random().toExponential(2) * (window.innerWidth - bird2.clientWidth);
  let leftoffset = Math.random().toExponential(2) * (window.innerHeight - bird2.clientHeight);
  bird2.style.top = topoffest + 'px';
  bird2.style.left = leftoffset + 'px';
  
}


function moveBird3() {
  console.log('bird three')
  let topoffest = Math.random()  * (window.innerWidth - bird3.clientWidth);
  let leftoffset = Math.random()  * (window.innerHeight - bird3.clientHeight);
  bird3.style.top = topoffest + 'px';
  bird3.style.left = leftoffset + 'px';
  
}







bird1.addEventListener('mouseover', moveBird1)
bird2.addEventListener('mouseover', moveBird2)
bird3.addEventListener('mouseover', moveBird3)













// let precentage = document.getElementById("prec");

// function changeprecent(precent) {
//   precentage.textContent = `GET  - ${precent} Off`;
// }

// changeprecent(200);

// let express = require("express");
// let fs = require("fs");
// let app = express();
// let path = require("path");
// let port = process.env.port || 5000;

// express.static(__dirname, path.join("/app.html"));

// app.listen(port, () => console.log(`app is listen to ort ${port}`));

// let mapping = arr.map((v, i) => v * v);
// console.log(mapping);

// let elm = [];
// function looper() {
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     return elm.push(num + num + num);
//   }
// }
// looper();
// console.log(elm);
// function getarg(arg1, arg2, func) {
//   return console.log(func(arg1, arg2));
// }
// let munice = (one, two) => one - two;
// let add = (one, two) => one + two;

// getarg(10, 20, add);
// getarg(20, 20, munice);

// const math = {
//   count = 0 ,
//   increment: function () {
//     this.count++;
//   },

//   currntvalue: function () {
//     console.log(this.count);
//   },
// };

// console.log(math.currntvalue());
// math.increment();
// math.increment();
// function addlist(list) {
//   let item = [];
//   return console.log(item.concat(list));
// }

// console.log(addlist({ id: 1, name: "sh" }));
// const review = [
//   {
//     id: 1,
//     name: "mostafa-ahmed",
//     img:
//       "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     bio:
//       "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis",
//   },
//   {
//     id: 2,
//     name: "sayed-ahmed",
//     img:
//       "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     bio:
//       "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis",
//   },
// ];

// const img = document.getElementById("imge");
// const name = document.getElementById("name");
// const reviewe = document.getElementById("review");

// window.addEventListener("DomContentLoaded", () => {
//   const mycontent = review[1];
//   img.src = mycontent.img;
//   name.textContent = mycontent.name;
// });
