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

    document.getElementById("darkMode").addEventListener("click", () => {
        let value = document.querySelector("#darkMode").getAttribute("data-value");
        checkValue(value++);
    });

    const checkValue = (val) => {
        if (val === 0) {
            val++;
            changeStyleToDark();
        } else {
            val--;
            location.reload();
        }
        writeValue(val);
    };

    const writeValue = (val) => {
        document.querySelector("#darkMode").setAttribute("data-value", val);
    };

    const changeStyleToDark = () => {
        let navBar = document.querySelector(".navbar").className;

        document.querySelector(".navbar").className = navBar.replace("navbar-dark #7e57c2 deep-purple", "elegant-color-dark");

        //change text

        let text = document.querySelectorAll("a");

        let h = document.querySelectorAll("h1,h2,h3,h4,h5,h6");

        text.forEach(function (item) {
            item.style.color = "white";
        });

        for (let i = 0; i < h.length; i++) {
            h[i].style.color = "white";
        }

        //change div/sect

        let section = document.querySelectorAll("section");

        for (let i = 0; i < section.length; i++) {
            section[i].style.backgroundColor = "black";
        }

        let div = document.querySelectorAll("div");

        for (let i = 10; i < div.length; i++) {
            div[i].style.backgroundColor = "black";
        }

        document.body.style.backgroundColor = "black";

        //header line

        let headerLine = document.querySelectorAll(".headerLine");

        for (let i = 0; i < headerLine.length; i++) {
            headerLine[i].style.background = "white";
        }

        //p

        let paragraph = document.querySelectorAll("p");

        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.color = "white";
        }

        //i

        let ico = document.querySelectorAll("i");

        for (let i = 0; i < ico.length; i++) {
            ico[i].style.color = "white";
        }

        //span

        let span = document.querySelectorAll("span");

        for (let i = 1; i < span.length; i++) {
            span[i].style.color = "white";
        }

        //label

        let label = document.querySelectorAll("label");

        for (let i = 0; i < label.length; i++) {
            label[i].style.color = "white";
        }
    };

    //Cart

    let order = [];

    $(".form-check-input").change(function () {
        if (this.checked) {
            updateCart(this);
            console.log(order);
        }
    });

    const updateCart = (item) => {
        let initialCount = parseInt(document.getElementById("cart_count").innerHTML);
        let items = [];
        items.push(item.id + ":" + item.getAttribute("data-value"));
        order.push(items);
        document.getElementById("cart_count").innerHTML = initialCount + 1;
    };
});