var E;
var DatosRopa_Pantalon = [];
var DatosRopa_Buzo = [];
var DatosRopa_Inicial = [
  {
    Titulo: "Título 1",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    Tipo: "Pantalon",
  },
  {
    Titulo: "Título 2",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    Tipo: "Buzo",
  },
  {
    Titulo: "Título 3",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    Tipo: "Pantalon",
  },
  {
    Titulo: "Título 4",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    Tipo: "Buzo",
  },
  {
    Titulo: "Título 5",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    Tipo: "Pantalon",
  },
  {
    Titulo: "Título 6",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    Tipo: "Buzo",
  },
  {
    Titulo: "Título 7",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    Tipo: "Pantalon",
  },
  {
    Titulo: "Título 8",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    Tipo: "Buzo",
  },
  {
    Titulo: "Título 9",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-1.jpg",
    Tipo: "Pantalon",
  },
  {
    Titulo: "Título 10",
    Imagen: "/TrabajoIntegradorUTN/img/Imagen-Deportiva-2.jpg",
    Tipo: "Buzo",
  },
];
var DatosRopa = [DatosRopa_Inicial, DatosRopa_Pantalon, DatosRopa_Buzo];

function FiltPantalon() {
  DatosRopa_Pantalon = DatosRopa_Inicial.filter(
    (Tip) => Tip.Tipo === "Pantalon"
  );
  E = 1;
  DatosRopa[1] = DatosRopa_Pantalon;
  GeneradorDeCajas(E);
}
function FiltBuzo() {
  DatosRopa_Buzo = DatosRopa_Inicial.filter((Tip) => Tip.Tipo === "Buzo");
  E = 2;
  DatosRopa[2] = DatosRopa_Buzo;
  GeneradorDeCajas(E);
}

function GeneradorDeCajas(E) {
  var Columna = 1;
  var Fila = 2;
  var i = 0;

  for (i; i < DatosRopa[E].length; i++) {
    console.log(DatosRopa);
    
    //Creacion De Cajas Dinamico
    const Caja = document.createElement("div");
    Caja.id = "Caja" + [i];
    Caja.className = "CajaEstilo";
    document.getElementById("CuerpoPag").appendChild(Caja); //Busco La ID del Cuerpo de Pagina y le agrego un elemento Hijo

    // Creacion de Botones en los Elementos Cajas
    const BotonComprar = document.createElement("button");
    Caja.appendChild(BotonComprar);
    BotonComprar.className = "BotonComprar";

    //Creacion de Imagenes segun su Caja
    const Img = document.createElement("img");
    Caja.appendChild(Img);
    Img.className = "EstiloImg";
    Img.src = DatosRopa[E][i].Imagen;

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
}
