const URL = "https://dummyjson.com/posts";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// get data
const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    console.log("Get data: ",data);
    factPara.innerText = data[0].text;
};


//post data
const option = {
    method: "POST",
    body: JSON.stringify({username: "Tushar Dharmik", userId: 5}),
    headers: myHeaders,
}

async function postdata1() {
    const response = await fetch(URL, options);
    //console.log(response);
    let data = await response.json;
    console.log("Post data:  ",data); 
}

async function postdata2() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        Headers: myHeaders,
        body: JSON.stringify({username: 'Tushar Dharmik', 
            userId: 5}),
    });
    //console.log(response);
    let data = await response.json;
    console.log("Post data:  ",data); 
}



// sync function
function getFact() {
    fetch(URL)
        .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[2].text);
        factPara.innerText = data[2].text;
      });
};
// button.addEventListener("click",getFact);
button.addEventListener("click",getFacts());
button.addEventListener("click",postdata2());