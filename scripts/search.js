// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


// function search()
// {
    
// }

var q = document.getElementById("search_input").value;
console.log(q)
let url = `https://masai-mock-api.herokuapp.com/news?q=twitter`;



let container = document.getElementById("results");

import { getData,append } from "../components/fetch.js";

getData(url).then((res)=>
{
    // console.log(res)
    append(res,container);
});
