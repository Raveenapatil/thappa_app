import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const name='Raveena Patil';
const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/250/300';
const img3='https://picsum.photos/220/300';
const img4='https://picsum.photos/id/13/200/300';
const links1="https://www.google.com/";
const links2="https://github.com/Raveenapatil/thappa_app/tree/master";

//JSX attribute

ReactDOM.render(
  <>
  <h1 className="heading" >My name is {name}</h1>
  <div className='img_div'>
  <img src={img1} alt="randomImages"/>
  <img src={img2} alt="randomImages"/>
  <a href={links1} target='blank'><img src={img3} alt="randomImages"/></a>
  <a href={links2} target='_raveena'><img src={img4} alt="randomImages"/></a>

  </div>
 
  </>,
  document.getElementById('root')
);

// //coding challenge#2
// 
// const d = new Date().toLocaleDateString();
// const t = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <h1>{`My name is ${name}`}</h1>
// <p>Current Date is {d}</p>
// <p>Current time is {t}</p>
// </>,
// document.getElementById("root"));




//Expression is the combination of operands and operators
// const name='Sunita';
// ReactDOM.render(
//   <>
//   <h1>{`${name} this is literal name`}</h1>
//   <h1>Hey Lady are you {name} ?</h1>
//   <p>Age is {2024-1998}</p> 
//   </>,
//   document.getElementById('root')
// );  





// // coding challenge #1
// ReactDOM.render(
//   <>
//   <h1>Thapa Technical Netflix Pick</h1>
//   <p>List of 5 Best Series</p>
//   <ol>
//     <li>Dark</li>
//     <li>Xyc</li>
//     <li>My first love</li>
//     <li>My holo love</li>
//     <li>Robot</li>
//   </ol>
//   </>,document.getElementById('root')
// );




// var React = require('react');
// var ReactDOM = require('react-dom');

// normal to add one tag in html page
// ReactDOM.render(<h1>hhhihih</h1>,document.getElementById('root'));

//---what the above line means 

// ReactDOM.render(
//   React.createElement("h1",null,"THappa Like"),
//   document.getElementById("root")
// );

//---what the above line means 

// var h1 = document.createElement("h1");
// h1.innerHTML="thappa sub";
// document.getElementById("root").appendChild(h1);


// multiple tags in JSX adding in different methods
// -----------------------------------------//
// using div

// ReactDOM.render(
// <div>
//   <h1>hi</h1>
//   <p>yyy</p>
// </div>,  document.getElementById("root")
// );

// using array
// ReactDOM.render(
//   [
//     <h1>hi</h1>,
//     <p>yyy</p>
//   ],  document.getElementById("root")
//   );

// react fragement---

// ReactDOM.render(
//   <React.Fragment>
//     <h1>hi</h1>
//     <p>yyy</p>
//   </React.Fragment>,  document.getElementById("root")
//   );

// ReactDOM.render(
//   <>
//     <h1>hi</h1>
//     <p>yyy</p>
//   </>,  document.getElementById("root")
//   );

