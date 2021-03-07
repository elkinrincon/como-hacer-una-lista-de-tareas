(function() {
    // variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    // funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

            if (tarea === "") {
                tareaInput.setAttribute("placeholder", "agrega una tarea valida");
                tareaInput.claseName = "error";
                return false;
            }
            
            // agregamos el contenido al enlace
            enlace.appendChild(contenido);
            // le establecemos un atributo href
            enlace.setAttribute("href", "#");
            //agregamos el enlace (a) a la nueva tarea (li)
            nuevaTarea.appendChild(enlace);
            // agregamos nuevas tareas a la lista
            lista.appendChild(nuevaTarea);

            tareaInput.value = "";

            for (var i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", function() {
                    this.parentNode.removeChild(this);
                });
            }

    };
    var comprovarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "agrga tu tarea");
    };

    var eleminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    // eventos

    // agregar tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // comprovar Input
    tareaInput.addEventListener("click", comprovarInput);

    //borrando elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
}());
