document.addEventListener("DOMContentLoaded" ,function(){
    const bottom_seller = document.getElementById("_bottom_bestseller");

    const items = [
        {img : "../img/picture1.png", name: "COFFEE CAPUCCINO" , tiltle: "A small river named Duden flows by their place and supplies" , price:"$5.9"},
        {img : "../img/picture2.png", name: "COFFEE CAPUCCINO" , tiltle: "A small river named Duden flows by their place and supplies" , price:"$5.9"},
        {img : "../img/picture3.png", name: "COFFEE CAPUCCINO" , tiltle: "A small river named Duden flows by their place and supplies" , price:"$5.9"},
        {img : "../img/picture4.png", name: "COFFEE CAPUCCINO" , tiltle: "A small river named Duden flows by their place and supplies" , price:"$5.9"},
    ];

    for(let i = 0 ; i < items.length ; i++){
        const item = document.createElement("div");
        item.className = "item_product";
        item.innerHTML = `
         <img src="${items[i].img}">
         <div class="title">
            <h3>${items[i].name}</h3>
            <p>${items[i].tiltle}</p>
            <p class="price">${items[i].price}</p>
            <button>Details</button>
         </div>
        `;
        bottom_seller.appendChild(item);
        item.addEventListener("click", () => {
            // Chuyển đến trang chi tiết mục
            window.location.href = `../Detailsproducts/details.html?item_product=${i}`;
        });
    }
});