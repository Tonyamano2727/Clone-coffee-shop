document.addEventListener("DOMContentLoaded" ,  function(){
    const _fr_img_feedback = document.getElementById("_fr_img_feedback");
    const img = [
        {img : "../img/feedback1.png"},
        {img : "../img/feedback2.png"},
        {img : "../img/feedback3.png"},
        {img : "../img/feedback4.png"},
    ];
    for(let i = 0 ; i < img.length ; i++){
        const itemimg = document.createElement("div");
        itemimg.className = "item_img";
        itemimg.innerHTML = `
        <img src="${img[i].img}">
        `;
        _fr_img_feedback.appendChild(itemimg);
    }
});