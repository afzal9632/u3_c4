// let url = "https://masai-mock-api.herokuapp.com/news?q=twitter";
// let container = document.getElementById("results");

let getData = async(url)=>
{
    let res = await fetch(url);
    let data = await res.json();

    return data.articles;
}

let append = (data,container)=>
{
    data.forEach(({urlToImage,title,description})=>
    {
        console.log("image: ",urlToImage)
        let box = document.createElement("div");
        box.setAttribute("id","box");

        let image_div = document.createElement("div");
        image_div.setAttribute("id","image_div");

        let news_div = document.createElement("div");
        news_div.setAttribute("id","news_div")

        let image = document.createElement("img");
        image.src = urlToImage;

        let T = document.createElement("h4");
        T.innerText = title;

        let des = document.createElement("p");
        des.innerText = description;

        image_div.append(image);
        news_div.append(T,des);
        box.append(image_div,news_div);
        container.append(box);
    })
}

export {getData,append};