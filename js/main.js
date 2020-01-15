$(function () {
    startCounter();

    function startCounter() {
        getData();
    }

    function getData() {
        let cars = parseInt(document.getElementById("cars_val").innerHTML);
        let rest = parseInt(document.getElementById("rest_val").innerHTML);
        let reviews = parseInt(document.getElementById("reviews").innerHTML);
        changeData(cars, rest, reviews);
    }

    function changeData(cars, rest, reviews) {
        let time = 0;
        let start = setInterval(function () {
            cars++;
            rest++;
            reviews++;
            changeDocument(cars, rest, reviews);
            time++;
            if (time === 15) {
                clearInterval(start);
            }
        }, 3000)
    }

    function changeDocument(cars, rest, reviews) {
        document.getElementById("cars_val").innerHTML = cars;
        document.getElementById("reviews").innerHTML = reviews;
        document.getElementById("rest_val").innerHTML = rest;
    }
});