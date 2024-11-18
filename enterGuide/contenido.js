const template1=document.getElementById("templateMarkdown");
const templateInicio=document.getElementById("templateGit");
const templateJavaScript=document.getElementById("templateJavaScript");
const botonMarkdown=document.getElementById("markdown");
const botonInicio=document.getElementById("git");
const botonJavaScript=document.getElementById("javaScript");
const botonMenuPrincipal=document.getElementById("volver");
const contenido=document.querySelector("#contenido");
let textdata= templateInicio.content.cloneNode(true);
contenido.appendChild(textdata);


botonMarkdown.addEventListener('click',function(){
  textdata=template1.content.cloneNode(true);
  contenido.innerHTML="";
  contenido.appendChild(textdata);
});
botonInicio.addEventListener('click',function(){
  textdata=templateInicio.content.cloneNode(true);
  contenido.innerHTML="";
  contenido.appendChild(textdata);
});
botonJavaScript.addEventListener('click',function(){
  textdata=templateJavaScript.content.cloneNode(true);
  contenido.innerHTML="";
  contenido.appendChild(textdata);
});
botonMenuPrincipal.addEventListener('click',function(){
  window.location.href="../index.html";
})