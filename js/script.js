import {
    madridList,
    alicanteList,
    valenciaList,
    castillaLaManchaList,
    castellonList,
    galiciaList
  } from "./datos.js";
  
  //  MENÚ TOGGLE SOLO PARA MÓVIL 
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__ul");
  
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
  
  //  ACORDEÓN (Consejos y recetas) 
  const bloque = document.querySelectorAll(".acordeon__bloque");
  const h2 = document.querySelectorAll(".acordeon__h2");
  
  h2.forEach((cadaH2, i) => {
    cadaH2.addEventListener("click", () => {
      bloque.forEach((cadaBloque) => {
        cadaBloque.classList.remove("acordeon__bloque--activo");
      });
      bloque[i].classList.add("acordeon__bloque--activo");
    });
  });
  
  //  TABS (Protectoras por Comunidad) 
  const containerBloques = document.querySelector(".contentlist");
  const listaBloques = containerBloques.querySelectorAll(".bloque");
  const listaTabs = document.querySelectorAll(".tab");
  
  listaBloques.forEach((tab, idx) => {
    listaTabs[idx].addEventListener("click", () => {
      listaBloques.forEach((bloque, id) => {
        listaBloques[id].classList.remove("active");
        listaTabs[id].classList.remove("active");
      });
      listaBloques[idx].classList.add("active");
      listaTabs[idx].classList.add("active");
    });
  });
  
 
  const cargarDatos = (listado, idContenedor) => {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "";
  
    listado.map(({ categoria, protectoras }) => {
      protectoras.map(({ nombre, direccion, web, telefono = "" }) => {
        contenedor.innerHTML += `
          <section class="bloque__contenido">
            <h3 class="bloque__h3">${categoria}</h3>
            <ul>
              <li class="bloque__title">${nombre}</li>
              <li>${direccion || "Sin dirección"}</li>
              <li>${web ? `<a href="${web}" target="_blank">${web}</a>` : "Sin web"}</li>
              <li>${telefono || "Sin teléfono"}</li>
            </ul>
          </section>
        `;
      });
    });
  };

  cargarDatos(madridList, "madrid");
  cargarDatos(valenciaList, "valencia");
  cargarDatos(alicanteList, "alicante");
  cargarDatos(galiciaList, "galicia");
  cargarDatos(castellonList, "castellon");
  cargarDatos(castillaLaManchaList, "castilla");