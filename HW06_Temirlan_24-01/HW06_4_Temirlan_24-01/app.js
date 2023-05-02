const wrapper = document.querySelector(".wrapper");

const req = () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            data.result.map((item) => {
                const block = document.createElement("div");
                const price = document.createElement("h3");
                const delivery = document.createElement("p");
                const name = document.createElement("p");
                const review = document.createElement("p");
                const img = document.createElement("img");
                const button = document.createElement("button");
                block.style.height = "447px";
                block.style.width = "253px";
                img.style.height = "280px";
                img.style.width = "253px";
                block.style.margin = "0 20px 40px";

                img.src = item.img;
                name.innerText = item.name;
                price.innerText = item.price;
                delivery.innerText = item.delivery;
                review.innerText = item.review;
                button.innerText = "В корзину";

                block.append(img);
                block.append(price);
                block.append(delivery);
                block.append(name);
                block.append(review);
                block.append(button);
                wrapper.append(block);
            })
        })
        .catch(error => console.error(error));
}

req();