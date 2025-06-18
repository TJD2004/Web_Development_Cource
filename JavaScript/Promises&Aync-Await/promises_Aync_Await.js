const getpromise =() => {
    return new Promise((resolve, reject) => {
        console.log("It is A Promise that never been fulfilled");
        resolve("Success");
    });
};
// then() & catch()
let promise = getpromise();
promise.then((res) => {
    console.log("FulFilled",res);
});
promise.catch((err) => {
    console.log("rejected",err);
});



function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataId);
            resolve("success");
        },2000);
    });
};

// Promise Chain
console.log("getting Data 1...");
getData(1)
    .then((res) => {
        console.log("getting Data 2...");
        return getData(2);
    })
    .then((res) => {
        console.log("getting Data 3...");
        return getData(3);
    })
    .then((res) => {
        console.log("getting Data 4...");
        return getData(4);
    })
    .then((res) => {
        console.log(res);
    });



// async Function
function asyncFun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataId);
            resolve("success");
        },4000);
    });
};
console.log("fetching data1...");
asyncFun().then((res) => {
    console.log("fetching data2...");
    asyncFun().then((res) => {});
});


// Async - Await
function getData (dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
};
async function getAlldata() {
    console.log("fetching data1...");
    await getData(1);
    console.log("fetching data2...");
    await getData(2);
    console.log("fetching data3...");
    await getData(3);
};


const URL = "";

const getFact = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}