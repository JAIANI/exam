var firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 5000);
  var pics;
  const img = document.getElementsByClassName("img");
  for (pics = 0; pics < img.length; pics++) {
    img[pics].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > img.length) {
    firstIndex = 1;
  }
  img[firstIndex - 1].style.display = "block";
}

automaticSlide();

// sdf
const liItem = document.querySelectorAll("ul li");
const imgItem = document.querySelectorAll(".project-img img");

liItem.forEach((li) => {
  li.onclick = function () {
    liItem.forEach((li) => {
      li.className = "";
    });
    li.className = "active";
  };
  const value = li.textContent;
  imgItem.forEach((img) => {
    img.style.display = "none";
    if (img.getAttribute("data-filter") == value.toLowerCase()) {
      img.style.display = "block";
    }
  });
});

// filter projects
// filterProjects("all");

// function filterProjects(c) {
//   var x, i;
//   x = document.getElementsByClassName("box");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }
// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split("");
//   arr2 = name.split("");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += "" + arr2[i];
//     }
//   }
// }
// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split("");
//   arr2 = name.split("");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1);
//     {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join("");
// }

function sendEmaile() {
  Email.send({
    Host: "sph@gmail.com",
    Username: "Beqa Jaiani",
    Password: "Beqa12345@",
    To: "beqab082@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> Website:" +
      document.getElementById("website").value +
      "<br> Message:" +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Succesfully"));
}
