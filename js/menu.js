document.addEventListener("DOMContentLoaded", function () {
    const menu_start = document.getElementById("menu_start");
    const menu_dish = document.getElementById("menu_dish");
    const menu_desserts = document.getElementById("menu_desserts");
    const menu_drinks = document.getElementById("menu_drinks");
  const starte = [
    {
      img: "../img/menustart1.png",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
    {
      img: "../img/menustart2.png",
      name: "Roasted Steak",
      title: "A small river named Duden flows by their place and supplies",
      price: "$29.00",
    },

    {
      img: "../img/menustart3.png",
      name: "Seasonal Soup",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: "../img/menustart4.png",
      name: "Chicken Curry",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
  ];
  const dish = [
    {
      img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-5.jpg.webp",
      name: "Sea Trout",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
    {
      img: "https://preview.colorlib.com/theme/coffeeblend/images/dish-5.jpg.webp",
      name: "Roasted Beef",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/dish-7.jpg",
      name: "Butter Fried Chicken",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/dish-8.jpg",
      name: "Chiken Filet",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
  ];
  const desserts = [
    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/dessert-1.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/dessert-2.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: ":	https://preview.colorlib.com/theme/coffeeblend/images/dessert-3.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/dessert-4.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
  ];
  const drink = [
    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/drink-5.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/drink-6.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: "https://preview.colorlib.com/theme/coffeeblend/images/drink-7.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },

    {
      img: "	https://preview.colorlib.com/theme/coffeeblend/images/drink-8.jpg",
      name: "Cornish - Mackerel",
      title: "A small river named Duden flows by their place and supplies",
      price: "$20.00",
    },
  ];
  for(let i = 0 ; i < starte.length ; i++){
    const itemstart = document.createElement("div");
    itemstart.className = "itemstart";
    itemstart.innerHTML = `
    <img src = "${starte[i].img}">
    <div class = "_right">
    <h3>${desserts[i].name} <span>---------------------------------- ${starte[i].price}</span></h3>
        <p>${starte[i].title}</p>
    </div>
    `;
    menu_start.appendChild(itemstart);
  }
  for(let i = 0 ; i < dish.length ; i++){
    const itemstart = document.createElement("div");
    itemstart.className = "itemstart";
    itemstart.innerHTML = `
    <img src = "${dish[i].img}">
    <div class = "_right">
        <h3>${dish[i].name} <span>---------------------------------- ${starte[i].price}</span></h3>
        <p>${dish[i].title}</p>
    </div>
    `;
    menu_dish.appendChild(itemstart);
  }
  for(let i = 0 ; i < desserts.length ; i++){
    const itemstart = document.createElement("div");
    itemstart.className = "itemstart";
    itemstart.innerHTML = `
    <img src = "${desserts[i].img}">
    <div class = "_right">
        <h3>${desserts[i].name} <span>---------------------------------- ${starte[i].price}</span></h3>
        <p>${desserts[i].title}</p>
    </div>
    `;
    menu_desserts.appendChild(itemstart);
  }
  for(let i = 0 ; i < drink.length ; i++){
    const itemstart = document.createElement("div");
    itemstart.className = "itemstart";
    itemstart.innerHTML = `
    <img src = "${drink[i].img}">
    <div class = "_right">
        <h3>${drink[i].name} <span>---------------------------------- ${starte[i].price}</span></h3>
        <p>${drink[i].title}</p>
    </div>
    `;
    menu_drinks.appendChild(itemstart);
  }
});
