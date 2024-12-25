const divElm = document.querySelectorAll(".mern2402");

divElm.forEach((item, index) => {
  const data = prompt(`input ${index}`);
  item.textContent = data;
});
