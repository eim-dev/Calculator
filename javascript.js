var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    //verifier si l'input n'est pas vide
    if(inputField.value != ""){
        //si l'input n'est pas vide, créer un paragraphe
        var paragraph = document.createElement('p')
    }
    //valoriser ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value ;

    //styliser le paragraphe
    paragraph.classList.add('paragraphe_style') ;

    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph) ;

    //vider l'input quand le paragraphe est ajouté
    inputField.value = "" ;

    //barrer le paragraphe quand on clique dessus
    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragraph_click');
    })

    // supprimer la tache quand on double click dessus
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph) ;
    })
}