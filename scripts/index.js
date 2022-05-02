// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import sidebar from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML=sidebar();

let url = "https://masai-mock-api.herokuapp.com/news?q=twitter"

let getData = async(url)=>
{
    let res = await fetch(url);
    let data = await res.json();

    console.log(data)

    // return data;
}

getData(url);