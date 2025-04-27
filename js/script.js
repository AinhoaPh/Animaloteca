
   

   
   //Menu toggle
    const navToggle = document.querySelector(".nav__toggle");
    const navList = document.querySelector(".nav__ul");

    navToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    }
    );


    // Consejos (acordeon)

    const bloque = document.querySelectorAll(".acordeon__bloque");
    const h2 = document.querySelectorAll(".acordeon__h2");

    h2.forEach((cadaH2, i) => {
        h2[i].addEventListener("click", () => {
            bloque.forEach((cadaBloque, i) => {
                bloque[i].classList.remove("acordeon__bloque--activo");
            })
            bloque[i].classList.add("acordeon__bloque--activo");
        })
    })


    // Protectoras (tabs )
    const containerBloques = document.querySelector(".contentlist");
    const listaBloques = containerBloques.querySelectorAll(".bloque");
    const listaTabs = document.querySelectorAll(".tab");



    listaBloques.forEach((tab, idx) => {


        listaTabs[idx].addEventListener("click", () => {

            listaBloques.forEach((bloque, id) => {
                listaBloques[id].classList.remove("active");
                listaTabs[id].classList.remove("active");
            })

            listaBloques[idx].classList.add("active");
            listaTabs[idx].classList.add("active");


        });

    });


// Agregar la clase bloque__h3 a todos los h3 dentro de bloque__contenido
const bloqueH3 = document.querySelectorAll(".bloque__contenido h3");
bloqueH3.forEach(h3 =>{ h3.classList.add("bloque__h3")});   



// Intento de codigo para crear el html pero no funciona 
    
    
//      const madridList = [
//         {
//              categoria: "Perros y gatos",
//              protectora: [
//                  {
//                      id 1,
//                      centro: "El Refugio",
//                      direccion: "",
//                      sitio web: "elrefugio.org",
//                      teléfono: "917 303 680"

//                  },
//                  {   
//                      id 2,
//                      centro: "ANAA (Asociación Nacional de Amigos de los Animales)",
//                      direccion: "",
//                      sitio web: " anaaweb.org",
//                      teléfono: " 913 197 975"
//                  }
//              ]



//          }
//      ];
//      const {id,centro,direccion,sitio web,telefono} = protectora;

//      const madridContainer = document.getElementById("madrid");
//      madridList.forEach(bloque, i => {
//          const protectoraHTML = `
//              <h3>${categoria}</h3>
//               <ul>
//                  <li >${centro}</li>
//                  <li>${direccion}</li>
//                  <li>${sitio web}</li>
//                  <li>${telefono}</li>
//              </ul>
//          `;
//          madridContainer.innerHTML += protectoraHTML;

//          })




