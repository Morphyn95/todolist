var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
//alert("test")
    //on vérifie que l'input n'est pas vide
    if(inputField.value != ""){
        var paragraph =document.createElement('p')
    }
    //valorisé ce p avec le contenu de l 'input
    paragraph.innerText = inputField.value ;

    //stylisé le p 
    paragraph.classList.add('paragraphe_style');

    // insérer ce p dans l'HTML
    toDoContainer.appendChild(paragraph);
    
    //clear l 'input 
    inputField.value = "";

    // barré la tache effectué
    paragraph.addEventListener('click',function() {
        paragraph.classList.add('paragraphe_click')
    })

    //supprimer la tache lors du double clik
    paragraph.addEventListener('dblclick',function() {
        toDoContainer.removeChild(paragraph);
    })
}