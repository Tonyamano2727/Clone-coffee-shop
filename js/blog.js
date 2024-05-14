document.addEventListener("DOMContentLoaded", function () {
  const _fr_item_recent = document.getElementById("_fr_item_recent");
  const item = [
    {
      img: "../img/blog1.png",
      step: "Sept 10, 2018",
      management: "Admin",
      comment: "3",
      nameitem: "The Delicious Pizza",
      title:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: "../img/blog2.png",
      step: "Sept 10, 2018",
      management: "Admin",
      comment: "3",
      nameitem: "The Delicious Pizza",
      title:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: "../img/blog3.png",
      step: "Sept 10, 2018",
      management: "Admin",
      comment: "3",
      nameitem: "The Delicious Pizza",
      title:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    
  ];

  for (let i = 0; i < item.length; i++) {
    const blog = document.createElement("div");
    blog.className = "fr_item_log";
    blog.innerHTML = `
            <img src = "${item[i].img}" >
            <div class = "fr_step">
                <a>${item[i].step}</a>
                <a>${item[i].management}</a>
            </div>
            <h3>${item[i].nameitem}</h3>
            <p>${item[i].title}</p>
        `;
        _fr_item_recent.appendChild(blog);
  }
});
