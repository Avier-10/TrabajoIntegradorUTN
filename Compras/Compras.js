var E = 0;
var Flag = 0;
var NumBorrar = 0;
var DatosRopa_PantalonH = [];
var DatosRopa_BuzoH = [];
var DatosRopa_BuzoM = [];
var DatosRopa_CalzaM = [];
var DatosRopa_CampH = [];
var DatosRopa_CampM = [];
var DatosRopa_ZapH = [];
var DatosRopa_ZapM = [];
var DatosRopa_Inicial = [
  {
    Titulo: "Zapatilla de Hombre",
    TituloDescripto: "Zapatilla de Hombre Negras",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillashombre1.jpg",
    Precio: "$$$$$",
    Tipo: "ZapH",
  },
  {
    Titulo: "Campera de Hombre",
    TituloDescripto: "Campera de Hombre Negra Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperahombre1.jpg",
    Precio: "$$$$$",
    Tipo: "CampH",
  },
  {
    Titulo: "Campera de Mujer",
    TituloDescripto: "Campera de Mujer Blanco y Rosa",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperamujer1.jpg",
    Precio: "$$$$$",
    Tipo: "CampM",
  },
  {
    Titulo: "Pantalon de Hombre",
    TituloDescripto: "Pantalon de Hombre Negro Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/pantalonhombre1.jpg",
    Precio: "$$$$$",
    Tipo: "PantalonH",
  },
  {
    Titulo: "Campera de Hombre",
    TituloDescripto: "Campera de Hombre Negra y Gris Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperahombre2.jpg",
    Precio: "$$$$$",
    Tipo: "CampH",
  },
  {
    Titulo: "Calza de Mujer",
    TituloDescripto: "Calza de Mujer Negra Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/calzamujer1.jpg",
    Precio: "$$$$$",
    Tipo: "CalzaM",
  },
  {
    Titulo: "Campera de Mujer",
    TituloDescripto: "Campera de Mujer Gris",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperamujer2.jpg",
    Precio: "$$$$$",
    Tipo: "CampM",
  },
  {
    Titulo: "Buzo de Mujer",
    TituloDescripto: "Buzo de Mujer Rosa Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzomujer1.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoM",
  },
  {
    Titulo: "Campera de Hombre",
    TituloDescripto: "Campera de Hombre Negra Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperahombre3.jpg",
    Precio: "$$$$$",
    Tipo: "CampH",
  },
  {
    Titulo: "Zapatilla de Mujer",
    TituloDescripto: "Zapatillas de Mujer Negras Topper",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillasmujer2.jpg",
    Precio: "$$$$$",
    Tipo: "ZapM",
  },
  {
    Titulo: "Campera de Hombre",
    TituloDescripto: "Campera de Hombre Negra Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperahombre4.jpg",
    Precio: "$$$$$",
    Tipo: "CampH",
  },
  {
    Titulo: "Calza de Mujer",
    TituloDescripto: "Calza de Mujer Negra Adidas",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/calzamujer2.jpg",
    Precio: "$$$$$",
    Tipo: "CalzaM",
  },
  {
    Titulo: "Buzo de Hombre",
    TituloDescripto: "Buzo de Hombre Gris",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzohombre1.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoH",
  },
  {
    Titulo: "Campera de Mujer",
    TituloDescripto: "Campera de Mujer Rosa Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperamujer3.jpg",
    Precio: "$$$$$",
    Tipo: "CampM",
  },
  {
    Titulo: "Buzo de Mujer",
    TituloDescripto: "Buzo de Mujer Gris Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzomujer2.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoM",
  },
  {
    Titulo: "Zapatilla de Mujer",
    TituloDescripto: "Zapatilla de Mujer Gris Puma",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillasmujer3.jpg",
    Precio: "$$$$$",
    Tipo: "ZapM",
  },
  {
    Titulo: "Pantalon de Hombre",
    TituloDescripto: "Pantalon de Hombre Azul Seleccion Argentina",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/pantalonhombre2.jpg",
    Precio: "$$$$$",
    Tipo: "PantalonH",
  },
  {
    Titulo: "Zapatilla de Hombre",
    TituloDescripto: "Zapatilla de Hombre Negras Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillashombre2.jpg",
    Precio: "$$$$$",
    Tipo: "ZapH",
  },
  {
    Titulo: "Campera de Hombre",
    TituloDescripto: "Campera de Hombre Celeste Adidas",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperahombre5.jpeg",
    Precio: "$$$$$",
    Tipo: "CampH",
  },
  {
    Titulo: "Buzo de Hombre",
    TituloDescripto: "Buzo de Hombre Negro",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzohombre2.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoH",
  },
  {
    Titulo: "Buzo de Mujer",
    TituloDescripto: "Buzo de Mujer Gris",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzomujer3.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoM",
  },
  {
    Titulo: "Pantalon de Hombre",
    TituloDescripto: "Pantalon de Hombre Negro",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/pantalonhombre3.jpg",
    Precio: "$$$$$",
    Tipo: "PantalonH",
  },
  {
    Titulo: "Zapatilla de Mujer",
    TituloDescripto: "Zapatillas de Mujer Negras Adidas",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillasmujer4.jpg",
    Precio: "$$$$$",
    Tipo: "ZapM",
  },
  {
    Titulo: "Campera de Mujer",
    TituloDescripto: "Campera de Mujer Rosa Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/camperamujer4.jpg",
    Precio: "$$$$$",
    Tipo: "CampM",
  },
  {
    Titulo: "Zapatilla de Hombre",
    TituloDescripto: "Zapatilla de Hombre Negras Topper",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillashombre3.jpg",
    Precio: "$$$$$",
    Tipo: "ZapH",
  },
  {
    Titulo: "Buzo de Hombre",
    TituloDescripto: "Buzo de Hombre Negro Adidas",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzohombre3.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoH",
  },
  {
    Titulo: "Pantalon de Hombre",
    TituloDescripto: "Pantalon de Hombre Gris Puma",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/pantalonhombre4.jpg",
    Precio: "$$$$$",
    Tipo: "PantalonH",
  },
  {
    Titulo: "Buzo de Mujer",
    TituloDescripto: "Buzo de Mujer Negro",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzomujer4.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoM",
  },
  {
    Titulo: "Calza de Mujer",
    TituloDescripto: "Calza de Mujer Negro",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/calzamujer3.jpg",
    Precio: "$$$$$",
    Tipo: "CalzaM",
  },
  {
    Titulo: "Zapatilla de Mujer",
    TituloDescripto: "Zapatilla de Mujer Rosa",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillasmujer1.jpg",
    Precio: "$$$$$",
    Tipo: "ZapM",
  },
  {
    Titulo: "Buzo de Hombre",
    TituloDescripto: "Buzo de Hombre Negro Nike",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzohombre4.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoH",
  },
  {
    Titulo: "Zapatilla de Hombre",
    TituloDescripto: "Zapatilla de Hombre Negras",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillashombre4.jpg",
    Precio: "$$$$$",
    Tipo: "ZapH",
  },
  {
    Titulo: "Buzo de Mujer",
    TituloDescripto: "Buzo de Mujer Negro",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzomujer5.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoM",
  },
  {
    Titulo: "Buzo de Hombre",
    TituloDescripto: "Buzo de Hombre Negro,gris y blanco",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/buzohombre5.jpg",
    Precio: "$$$$$",
    Tipo: "BuzoH",
  },
  {
    Titulo: "Calza de Mujer",
    TituloDescripto: "Calza de Mujer Negro",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/calzamujer4.jpg",
    Precio: "$$$$$",
    Tipo: "CalzaM",
  },
  {
    Titulo: "Zapatilla de Mujer",
    TituloDescripto: "Zapatilla de Mujer Negras",
    Descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    DescripcionRopa:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras.",
    Imagen: "/TrabajoIntegradorUTN/img/zapatillasmujer5.jpg",
    Precio: "$$$$$",
    Tipo: "ZapM",
  },
];
// Creo un Array que contiene lo datos Filtrados y sin Filtrar
var DatosRopa = [
  DatosRopa_Inicial,
  DatosRopa_PantalonH,
  DatosRopa_BuzoH,
  DatosRopa_BuzoM,
  DatosRopa_CalzaM,
  DatosRopa_CampH,
  DatosRopa_CampM,
  DatosRopa_ZapH,
  DatosRopa_ZapM,
];

if (Flag == 0) {
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
  //////////////////////////////////////////
  switch (E) {
    case 0:
      NumBorrar = DatosRopa_Inicial.length - 1; //Le resto 1 para tener la cantidad necesaria a borrar
      break;
    case 1:
      NumBorrar = DatosRopa_PantalonH.length - 1;
      break;
    case 2:
      NumBorrar = DatosRopa_BuzoH.length - 1;
      break;
    case 3:
      NumBorrar = DatosRopa_BuzoM.length - 1;
      break;
    case 4:
      NumBorrar = DatosRopa_CalzaM.length - 1;
      break;
    case 5:
      NumBorrar = DatosRopa_CampH.length - 1;
      break;
    case 6:
      NumBorrar = DatosRopa_CampM.length - 1;
      break;
    case 7:
      NumBorrar = DatosRopa_ZapH.length - 1;
      break;
    case 8:
      NumBorrar = DatosRopa_ZapM.length - 1;
      break;
  }
  /////////////////////////////////////////
  for (i = 0; i < DatosRopa[E].length; i++) {
    //Creacion De Cajas Dinamico
    const Caja = document.createElement("div");
    Caja.id = "Caja" + i;
    Caja.className = "CajaEstilo";
    document.getElementById("CuerpoPag").appendChild(Caja); //Busco La ID del Cuerpo de Pagina y le agrego un elemento Hijo al Padre

    //Creacion de Imagenes segun su Caja
    const Img = document.createElement("img");
    Caja.appendChild(Img);
    Img.className = "EstiloImg";
    Img.src = DatosRopa[E][i].Imagen;

    // Creacion de Botones en los Elementos Cajas
    const Redireccionar = document.createElement("a");
    const BotonComprar = document.createElement("button");

    Redireccionar.appendChild(BotonComprar);
    Caja.appendChild(Redireccionar);

    BotonComprar.className = "BotonComprar";
    BotonComprar.id = "BotonC" + i;
    BotonComprar.onclick = function () {
      InformacionRopa(BotonComprar.id, DatosRopa[E]);
    };

    document.getElementById("BotonC" + i).innerHTML = "Comprar"; // Le pongo el texto a cada Boton
    Redireccionar.href = "/TrabajoIntegradorUTN/InfoDeRopa/index.html"; ///

    //Creacion de Titulo de la Imagen en los Elementos Cajas
    const Titulos = document.createElement("p");
    Caja.appendChild(Titulos);
    Titulos.innerHTML = DatosRopa[E][i].Titulo;

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
////////////////////////////////////////////////////////////////////////////////////////
function FiltPantalonH() {
  DatosRopa_PantalonH = DatosRopa_Inicial.filter(
    (Elem) => Elem.Tipo === "PantalonH"
  ); //Busco y filtro con la palabra clave "Pantalon"
  E = 1;
  DatosRopa[1] = DatosRopa_PantalonH; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltBuzoH() {
  DatosRopa_BuzoH = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "BuzoH"); //Busco y filtro con la palabra clave "Buzo"
  E = 2;
  DatosRopa[2] = DatosRopa_BuzoH; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltBuzoM() {
  DatosRopa_BuzoM = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "BuzoM"); //Busco y filtro con la palabra clave "Buzo"
  E = 3;
  DatosRopa[3] = DatosRopa_BuzoM; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltCalzaM() {
  DatosRopa_CalzaM = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "CalzaM"); //Busco y filtro con la palabra clave "Buzo"
  E = 4;
  DatosRopa[4] = DatosRopa_CalzaM; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltCampH() {
  DatosRopa_CampH = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "CampH"); //Busco y filtro con la palabra clave "Buzo"
  E = 5;
  DatosRopa[5] = DatosRopa_CampH; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltCampM() {
  DatosRopa_CampM = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "CampM"); //Busco y filtro con la palabra clave "Buzo"
  E = 6;
  DatosRopa[6] = DatosRopa_CampM; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltZapH() {
  DatosRopa_ZapH = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "ZapH"); //Busco y filtro con la palabra clave "Buzo"
  E = 7;
  DatosRopa[7] = DatosRopa_ZapH; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
function FiltZapM() {
  DatosRopa_ZapM = DatosRopa_Inicial.filter((Elem) => Elem.Tipo === "ZapM"); //Busco y filtro con la palabra clave "Buzo"
  E = 8;
  DatosRopa[8] = DatosRopa_ZapM; //Guardo en el Nuevo Array
  GeneradorDeCajas(E);
}
