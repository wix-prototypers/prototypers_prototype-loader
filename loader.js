const onPrototypeReady = (src) => {
  const body = document.querySelector("body");

  if (!src) {
    body.classList.add("loading");
    body.insertAdjacentHTML("afterbegin", `<span class="loader"></span>`);
  } else {
    body.insertAdjacentHTML(
      "afterbegin",
      `<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
    `
    );
  }
  window.addEventListener("load", function () {
    prototypeFunc();
    body.classList.remove("loading");
    document.querySelector(".loader")?.remove();
    body.classList.add("loaded");
  });
};
onPrototypeReady("https://www.google.com");
