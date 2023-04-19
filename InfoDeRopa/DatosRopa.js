var BtnPress;
var InfArray;
var InfGuardada = JSON.parse(sessionStorage.getItem("DatoDeRopa"));

console.log(InfGuardada);
//<img src="" id="imagen" height="600px" malt="" />

const ImgPost = document.createElement("img");
document.getElementById("center").appendChild(ImgPost);
ImgPost.id = "imagen";
ImgPost.src = InfGuardada.Imagen;

function InformacionRopa(BtnPress, InfArray) {
  let NumPosicion = BtnPress.replace(/[^0-9]+/g, ""); // Elimino el resto y me retorna el numero del boton

  const ElemGuardar = InfArray[Number(NumPosicion)];
  sessionStorage.setItem("DatoDeRopa", JSON.stringify(ElemGuardar));
}
