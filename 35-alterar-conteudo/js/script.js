//alterando elementos no html com js - atrelamos isso com alguma ação no evento

//selecionando elemento

var title = document.querySelector("#title"); //selecionado elemento 
console.log(title);

//alterar texto - duas formas :

//innerHTML
title.innerHTML = "testando o texto alterado"

//textContent - mais utilizado,recomendado e perfomático

var subtitle = document.querySelector(".subtitle"); //acessando 
console.log(subtitle);

subtitle.textContent = "testando textContet";

//seleciona elemento e dps altera