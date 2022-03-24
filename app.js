window.onload = async () => {
  const menu = await fetchInfo("menu.json");
  menuHTML(menu);
  const products = await fetchInfo("products.json");
  SlidersHTML(products);
};

//peticion a los datos
async function fetchInfo(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
//Cargar Menu
function menuHTML(menu) {
  const items = [];

  let html, activeClass;

  menu.forEach((item) => {
    activeClass = items.length == 0 ? " active " : "";
    html = `<li class="nav-item">
                <a class="nav-link ${activeClass}" aria-current="page" href="${item.url}"><i
                        class="${item.icono}"></i> ${item.titulo}</a>
            </li>`;
    items.push(html);
  });
  document.getElementById("items-menu").innerHTML = items.join("");
}

//Cargar Productos
function SlidersHTML(products) {
  const slides = [],
    indicators = [];

  let html, activeClass;

  products.forEach((item) => {
    activeClass = slides.length == 0 ? " active " : "";
    html = `<div class="carousel-item ${activeClass}">
                <img src="${item.imagen}"
                    class="d-block w-25 mx-auto" alt="${item.alt}">
                <div class="carousel-caption d-md-block">
                    <h3>${item.titulo}</h3>
                    <p>L${item.subtitulo}</p>
                </div>
            </div>`;
    slides.push(html);

    activeClass = indicators.length == 0 ? "active" : "";
    html = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${indicators.length}" class="${activeClass}"
                aria-current="true" aria-label="${item.titulo}"></button>`;
    indicators.push(html);
  });
  document.getElementById("indicators").innerHTML = indicators.join("");
  document.getElementById("slides").innerHTML = slides.join("");
}
