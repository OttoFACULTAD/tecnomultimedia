document.getElementById('boton').addEventListener('click', function(){
var formulario = document.getElementById('formulario');
formulario.classList.toggle('oculto');

if (!formulario.classList.contains('oculto')){
this.disabled = true
}
});

document.getElementById('boton2').addEventListener('click', function(){
    var formulario = document.getElementById('formulario');
    formulario.classList.toggle('oculto');

    if (!formulario.classList.contains('oculto')){
        this.disabled = true
    }
});