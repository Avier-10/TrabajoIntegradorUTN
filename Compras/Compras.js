window.onload = function GeneradorDeCajas() {
  var DatosRopa = [
    { titulo: "Título 1", contenido: "Contenido del primer div" },
    { titulo: "Título 2", contenido: "Contenido del segundo div" },
    { titulo: "Título 3", contenido: "Contenido del tercer div" },
    { titulo: "Título 4", contenido: "Contenido del cuarto div" },
    { titulo: "Título 5", contenido: "Contenido del quinto div" },
    { titulo: "Título 6", contenido: "Contenido del sexto div" },
    { titulo: "Título 7", contenido: "Contenido del septimo div" },
    { titulo: "Título 8", contenido: "Contenido del octavo div" },
  ];
  var Columna = 1;
  var Fila = 2;

  for (i = 0; i < DatosRopa.length; i++) {
    const Caja = document.createElement("div");
    Caja.id = "Caja" + [i];
    Caja.className = "CajaEstilo";

    document.getElementById("CuerpoPag").appendChild(Caja);

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
