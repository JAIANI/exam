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
