// setTimeout Function
console.log("One");
console.log("Two");
console.log("Three");
setTimeout(() => {
    console.log("Hello!");
}, 4000);
console.log("Four");
console.log("Five");



// CallBack Function
function calculator(a, b , sumCallBack) {
    sumCallBack(a,b);
}
calculator(1, 2, (a,b) => {
    console.log(a+b);
});



// CallBack Hell
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data ", dataId);
        if(getNextData) {
            getNextData();
        }
    },2000);
};
getData(1, () => {
    console.log("getting Data 2...");
    getData(2, () => {
        console.log("getting Data 3...");
        getData(3, () => {
            console.log("getting Data 4...");
            getData(4);
        });
    });
});
