var E = 0;
var Flag = 0;
var NumBorrar = 0;
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
var DatosRopa = [DatosRopa_Inicial, DatosRopa_Pantalon, DatosRopa_Buzo]; // Creo un Array que contiene lo datos Filtrados y sin Filtrar
if (Flag == 0) {
  GeneradorDeCajas(E);
}
function FiltPantalon() {
  DatosRopa_Pantalon = DatosRopa_Inicial.filter(
    (Elem) => Elem.Tipo === "Pantalon"
  ); //Busco y filtro con la palabra clave "Pantalon"
  E = 1;
  DatosRopa[1] = DatosRopa_Pantalon; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltBuzo() {
  DatosRopa_Buzo = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "Buzo"); //Busco y filtro con la palabra clave "Buzo"
  E = 2;
  DatosRopa[2] = DatosRopa_Buzo; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}

function GeneradorDeCajas(E) {
  var Columna = 1;
  var Fila = 2;

  //Borro la cantidad de cajas anteriores
  if (Flag == 1) {
    //Agrego un Flag para saber si porlomenos se ejecuto una vez el codigo
    for (j = NumBorrar; j >= 0; j--) {
      const CuerpoPagina = document.getElementById("CuerpoPag");
      const CajaElimin = document.getElementById("Caja" + j);
      CuerpoPagina.removeChild(CajaElimin);
    }
  }
  if (E === 0) {
    NumBorrar = DatosRopa_Inicial.length - 1; //Le resto 1 para tener la cantidad necesaria a borrar
  } else if (E === 1) {
    NumBorrar = DatosRopa_Pantalon.length - 1;
  } else {
    NumBorrar = DatosRopa_Buzo.length - 1;
  }
  /////////////////////////////////////////
  for (i = 0; i < DatosRopa[E].length; i++) {
    //Creacion De Cajas Dinamico
    const Caja = document.createElement("div");
    Caja.id = "Caja" + i;
    Caja.className = "CajaEstilo";
    document.getElementById("CuerpoPag").appendChild(Caja); //Busco La ID del Cuerpo de Pagina y le agrego un elemento Hijo al Padre

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
  Flag = 1;
}
