window.onload = function GeneradorDeCajas() {
  var DatosRopa = [
    {
      Titulo: "Título 1",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
      Tipo:
    },
    {
      Titulo: "Título 2",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    },
    {
      Titulo: "Título 3",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    },
    {
      Titulo: "Título 4",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    },
    {
      Titulo: "Título 5",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    },
    {
      Titulo: "Título 6",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    },
    {
      Titulo: "Título 7",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    },
    {
      Titulo: "Título 8",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    },
    {
      Titulo: "Título 9",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    },
    {
      Titulo: "Título 10",
      Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    },
  ];

  var Columna = 1;
  var Fila = 2;

  for (i = 0; i < DatosRopa.length; i++) {
    const Caja = document.createElement("div");
    Caja.id = "Caja" + [i];
    Caja.className = "CajaEstilo";
    document.getElementById("CuerpoPag").appendChild(Caja);

    const BotonComprar = document.createElement("button");
    Caja.appendChild(BotonComprar);
    BotonComprar.className = "BotonComprar";

    const Img = document.createElement("img");
    Caja.appendChild(Img);
    Img.className = "EstiloImg";
    Img.src = DatosRopa[i].Imagen;

    if (Columna < 4) {
      Columna++;
      Caja.style.gridColumn = Columna;
      Caja.style.gridRow = Fila;
    } else {
      Fila++;
      Columna = 2;
      Caja.style.gridColumn = Columna;
      Caja.style.gridRow = Fila;
    }
  }
};
