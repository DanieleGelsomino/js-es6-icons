console.log("JS OK!");

/*
    consegna:
    Milestone 1
    Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
    in cui è presente il nome dell'icona e l'icona stessa.
    Milestone 2
    Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
    Milestone 3
    Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal,
    vegetable, user). Quando l'utente seleziona un tipo dalla select,
    visualizzare solamente le icone corrispondenti.
    
*/
//******** Variabili ********//
const containerCards = document.getElementById("container-card");

//******** / Variabili ********//

//******** Funzioni ********//
function generateCards(arrayGenerated) {
  // utilizzo il ciclo forEach per generare le card
  arrayGenerated.forEach((cardIcon) => {
    // creo un nuovo elemento div
    const icon = document.createElement("div");
    // assegno una classe al nuovo elemento nel quale appenderò le proprietà dell'array icons
    icon.className = "card-icon";
    icon.innerHTML = `
    <i class="${cardIcon.family} ${cardIcon.prefix}${cardIcon.name} ${cardIcon.color}"></i>
    <div class="icon-name">${cardIcon.name}</div>
    `;
    containerCards.appendChild(icon);
  });
}

function categories(icons, type) {
  const category = icons.filter((icons) => icons.type === type);
  return category;
}

function selectCategory(icons, containerCards) {
  const selectOptions = document.getElementById("type-selector");

  selectOptions.addEventListener("change", () => {
    containerCards.innerHTML = "";
    // vado a recuperare tutti i valori del selectOptions
    switch (selectOptions.value) {
      case "all": // se valore é all
        generateCards(icons, containerCards);
        break;
      case "animal": // se valore é animal
        const animalsSelect = categories(icons, "animal");
        generateCards(animalsSelect, containerCards); // genera icons type animal
        break;
      case "vegetable": // se valore é vegetable
        const vegetablesSelect = categories(icons, "vegetable");
        generateCards(vegetablesSelect, containerCards); // genera icons type vegetable
        break;
      case "user": // se valore é user
        const usersSelect = categories(icons, "user");
        generateCards(usersSelect, containerCards); // genera icons type user
        break;
    }
  });
}

//******** / Funzioni ********//

//******** Programmi ********//
generateCards(icons);
selectCategory(icons, containerCards);
//******** / Programmi ********//
