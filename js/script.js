// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];


let mainEl = document.querySelector("main");
// console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)";

document.querySelector("main").innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

document.querySelector("#top-menu").style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");


menuLinks.forEach((number) => {
    let addedBar = document.createElement("a");
     addedBar.setAttribute("href", number.href);
    addedBar.innerText = number.text;
    topMenuEl.append(addedBar);
    console.log(addedBar);
});