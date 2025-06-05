const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0].text;
};

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
button.addEventListener("click",getFact);
button.addEventListener("click",getFacts);