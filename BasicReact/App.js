/*
*
<div id="parent">
   <div id="chlid">
   <h1></h1>
   <h1></h1>
   </div>
   </div>
* 
*
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Har Har MahaDev - Heading!"),
    React.createElement("h2", { id: "heading" }, "Har Har MahaDev - Heading2!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Har Har MahaDev - Heading!"),
    React.createElement("h2", { id: "heading" }, "Har Har MahaDev - Heading2!"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Har Har MahaDev - React!"
// );

// *******************************************************************************************
// createElement - > object
// {} = > Attributr --> props attributes

console.log(parent);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//JSX will see some other day
