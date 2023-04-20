var BtnPress;
var InfArray;
var InfGuardada = JSON.parse(sessionStorage.getItem("DatoDeRopa"));

console.log(InfGuardada);
document.getElementById("Titulo").innerHTML = InfGuardada.Titulo;

document.getElementById("descripcion").innerHTML = InfGuardada.Descripcion;

document.getElementById("h2").innerHTML = InfGuardada.TituloDescripto;

document.getElementById("p2").innerHTML = InfGuardada.DescripcionRopa;

document.getElementById("Valor").innerHTML = "Precio: " + InfGuardada.Precio;

const ImgPost = document.createElement("img");
document.getElementById("center").appendChild(ImgPost);
ImgPost.id = "imagen";
ImgPost.src = InfGuardada.Imagen;

function InformacionRopa(BtnPress, InfArray) {
  let NumPosicion = BtnPress.replace(/[^0-9]+/g, ""); // Elimino el resto y me retorna el numero del boton

  const ElemGuardar = InfArray[Number(NumPosicion)];
  sessionStorage.setItem("DatoDeRopa", JSON.stringify(ElemGuardar));
}
