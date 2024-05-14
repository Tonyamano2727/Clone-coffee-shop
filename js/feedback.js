document.addEventListener("DOMContentLoaded", function () {
  const feedback_customer_bottom = document.getElementById(
    "feedback_customer_bottom"
  );

  const itemfeedback = [
    {
      img: "../img/toan.png",
      name: "Minh Toan",
      level: "Illustrator Designer",
      title:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
    },
    {
      img: "../img/khaivi.png",
      name: "Khai Vi",
      level: "Illustrator Designer",
      title:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”",
    },
    {
      img: "../img/picture1.png",
      name: "Hoang Hai",
      level: "Illustrator Designer",
      title:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”",
    },
    {
      img: "../img/picture1.png",
      name: "Hoang Bao",
      level: "Illustrator Designer",
      title:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”",
    },
    {
      img: "../img/picture1.png",
      name: "Hien Duc",
      level: "Illustrator Designer",
      title:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”",
    },
  ];
  for (let i = 0; i < itemfeedback.length; i++) {
    const feedback = document.createElement("div");
    feedback.className = "feedback";
    feedback.innerHTML = `
        <p>${itemfeedback[i].title}</p>
        <div class = "customer">
            <div class = "_left">
            <img src = "${itemfeedback[i].img}"> 
            </div>
            <div class = "_right">
                <p>${itemfeedback[i].name}</p>
                <span>${itemfeedback[i].level}</span>
            </div>
        </div>
        `;
        feedback_customer_bottom.appendChild(feedback);
  }
});
