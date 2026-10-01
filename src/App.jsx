import React from "react";

function App() {

  const { useState } = React

  const [addedProducts, setAddedProducts] = useState([])

  function addToCart(product) {
   const prodottoPresente = addedProducts.some(p => p.name === product.name)

   if (prodottoPresente) {
    return
   } 
    setAddedProducts(curr => [...curr, {...product, quantity: 1}])
}

  const products = [
     { name: 'Mela', price: 0.5 },
     { name: 'Pane', price: 1.2 },
     { name: 'Latte', price: 1.0 },
     { name: 'Pasta', price: 0.7 },
    ];

  return (
    <>
      <h1>Prodotti del negozio:</h1>
        <ul>
          {products.map((el, index) => (
            <div key={index}>
              <li>{el.name}: {el.price.toFixed(2)}€</li>
              <button onClick={() => addToCart(el)}>Aggiungi al carrello</button>
            </div>
          ))}
        </ul>

        <hr />
        {addedProducts.length > 0 &&
        <>
          <h1>Carrello</h1>
            <ul>
              {addedProducts.map((el, index) => (
                <li key={index}>{el.name}: {el.price.toFixed(2)}€ - quantity:{el.quantity}</li>
              ))}
            </ul>
          </>
        }
    </>
  )
}

export default App

// 📌 Milestone 1: Mostrare la lista dei prodotti
// 1. Parti dall’array products fornito:

// Crea un componente che mostra la lista dei prodotti.
// Per ogni prodotto, mostra:
// Nome
// Prezzo

// Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.


// 📌 Milestone 2: Aggiungere prodotti al carrello
// Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
// Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
// Al click del bottone, usa una funzione addToCart per:
// Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
// Se il prodotto è già nel carrello, ignora l’azione.
// Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
// Per ogni prodotto nel carrello, mostra:
// Nome
// Prezzo
// Quantità

// Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.