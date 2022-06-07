/* LES SELECTEURS */

let todoList = document.querySelector(".todoList");
let todoInput = document.querySelector(".todoInput");
let todoButton = document.querySelector(".todoButton");

/* FONCTION CHARGEMENT DE LA TACHE*/

// CREATION DE LA DIV
todoButton.addEventListener("click", function () {
  if (todoInput.value == "") {
    alert(`Veuillez saisir une tâche`);
  } else {
    let todoInput = document.querySelector(".todoInput");
    let newDiv = document.createElement("div");
    newDiv.className = "newDivList";
    //CREATION DE BALISE LI
    let newLi = document.createElement("li");
    newLi.innerText = todoInput.value;
    let newBoutonCheck = document.createElement("button");
    let newBoutonModifier = document.createElement("button");
    let newBoutonSupprime = document.createElement("button");

    //DONNER UNE VALEUR AUX BOUTONS
    newBoutonSupprime.innerText = "Supprimer";
    newBoutonModifier.innerText = "Modifier";
    newBoutonModifier.className = "boutonModifier";
    newBoutonSupprime.className = "boutonSupprime";
    newBoutonCheck.className = "boutonCheck";
    newBoutonCheck.innerText = "Effectué";

    //AFFICHAGE DES ELEMENTS BOUTONS
    newDiv.appendChild(newBoutonModifier);
    newDiv.appendChild(newBoutonCheck);
    newDiv.appendChild(newBoutonSupprime);
    newDiv.appendChild(newLi);
    todoList.appendChild(newDiv);
    alert = "Vous venez d'ajouter un élément";
    todoInput.value = "";

    // //SUPPRIMER LA LISTE QUAND ON CLIQUE SUR LE BOUTON SUPPRIMER
    // newBoutonSupprime.addEventListener("click", function () {
    //   //DEMANDER LA CONFIRMATION
    //   let text = "Veuillez confirmer svp!\nEither OK or Cancel.";
    //   if (confirm(text) == true) {
    //     alert = "Vous avez pressé OK!";
    //     newLi.parentElement.remove();
    //   } else {
    //     alert = "VOus avez annulé!";
    //   }
    // });

   /**
     * CREATION DE L'EVENEMENT MODIF AVEC LE BOUTON MODIF
     */
    newBoutonSupprime.addEventListener("click", function () {
      // Cacher notre li
      li.style.display = "none";
      // Création de notre input
      let liInput = document.createElement("input");
      liInput.setAttribute("type", "text");
      list.appendChild(liInput);

    // BARRE LE TEXTE QUAND ON CLIQUE SUR CHECK
    newBoutonCheck.addEventListener("click", function () {
      if ("click" == true) {
        newLi.style.textDecoration = "line-through";
      }
    });
  }
});
