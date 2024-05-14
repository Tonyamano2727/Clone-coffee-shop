document.addEventListener("DOMContentLoaded", function () {
  const tabs_1 = document.getElementById("tabs-1");
  const item_tab1 = [
    {
      img: "../img/Beff.png",
      name: "GRILLED BEEF",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
    {
      img: "../img/Beff2.png",
      name: "GRILLED BEEF",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
    {
      img: "../img/Beff3.png",
      name: "GRILLED BEEF",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
  ];
  for (let i = 0; i < item_tab1.length; i++) {
    const item_tab1_s = document.createElement("div");
    item_tab1_s.className = "item_tab1_s";
    item_tab1_s.innerHTML = `
            <img src = "${item_tab1[i].img}">
            <h3>${item_tab1[i].name}</h3>
            <p>${item_tab1[i].title}</p>
            <p class = "price">${item_tab1[i].price}</p>
            <a> Details </a>
        `;
    tabs_1.appendChild(item_tab1_s);
    item_tab1_s.addEventListener("click", () => {
      // Chuyển đến trang chi tiết mục
      window.location.href = `../Detailsproducts/details.html?item_tab1_s=${i}`;
  });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs_2 = document.getElementById("tabs-2");
  const item_tab2 = [
    
      {
        img: "../img/drink1.png",
        name: "LEMONADE JUICE",
        title:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        price: "$2.90",
      },
    {
      img: "../img/drink2.png",
      name: "PINEAPPLE JUICE",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
    {
      img: "../img/drink3.png",
      name: "SODA DRINKS",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
  ];
  for (let i = 0; i < item_tab2.length; i++) {
    const item_tab2_s = document.createElement("div");
    item_tab2_s.className = "item_tab1_s";
    item_tab2_s.innerHTML = `
            <img src = "${item_tab2[i].img}">
            <h3>${item_tab2[i].name}</h3>
            <p>${item_tab2[i].title}</p>
            <p class = "price">${item_tab2[i].price}</p>
            <a> Details </a>
        `;
    tabs_2.appendChild(item_tab2_s);
    item_tab2_s.addEventListener("click", () => {
      // Chuyển đến trang chi tiết mục
      window.location.href = `../Detailsproducts/details.html?item_tab2_s=${i}`;
  });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs_3 = document.getElementById("tabs-3");
  const item_tab3 = [
       {
      img: "../img/cake1.png",
      name: "HOT CAKE HONEY",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
    {
      img: "../img/cake2.png",
      name: "HOT CAKE HONEY",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
    {
      img: "../img/cake3.png",
      name: "HOT CAKE HONEY",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      price: "$2.90",
    },
  ];
  for (let i = 0; i < item_tab3.length; i++) {
    const item_tab3_s = document.createElement("div");
    item_tab3_s.className = "item_tab1_s";
    item_tab3_s.innerHTML = `
            <img src = "${item_tab3[i].img}">
            <h3>${item_tab3[i].name}</h3>
            <p>${item_tab3[i].title}</p>
            <p class = "price">${item_tab3[i].price}</p>
            <a> Details </a>
        `;
    tabs_3.appendChild(item_tab3_s);
    item_tab3_s.addEventListener("click", () => {
      // Chuyển đến trang chi tiết mục
      window.location.href = `../Detailsproducts/details.html?item_tab3_s=${i}`;
  });
  }
});
