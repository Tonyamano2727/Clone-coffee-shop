window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("nav-item-black");
    navbar.style.background("black");
    navbar.style.opacity = "1"; // Hiển thị menu khi cuộn lên
  } else {
    navbar.classList.remove("nav-item-black");
    navbar.style.opacity = "0"; // Ẩn menu khi cuộn xuống
  }
}