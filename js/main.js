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
    BONUS
    1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico:
    generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#"
    seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
    2- popolare le options della select della milestone 3 dinamicamente.
    Consigli del giorno
    Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna.
    Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
    Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome,
    perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
    Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome,
    analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
    Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto
    e visualizzare l'icona in pagina?
    Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno
    l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
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

    switch (selectOptions.value) {
      case "all":
        generateCards(icons, containerCards);
        break;
      case "animal":
        const animalsArray = categories(icons, "animal");
        generateCards(animalsArray, containerCards);
        break;
      case "vegetable":
        const vegetablesArray = categories(icons, "vegetable");
        generateCards(vegetablesArray, containerCards);
        break;
      case "user":
        const usersArray = categories(icons, "user");
        generateCards(usersArray, containerCards);
        break;
    }
  });
}

//******** / Funzioni ********//

//******** Programmi ********//
generateCards(icons);
selectCategory(icons, containerCards);
//******** / Programmi ********//
