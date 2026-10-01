import React from "react";

function App() {
  const { useState } = React

  const [addedProducts, setAddedProducts] = useState([])

  function updateProductQuantity(product) {
    setAddedProducts(curr => 
      curr.map(p => p.name === product.name ? {...p, quantity: p.quantity +1} : p)
    )
  }


  function addToCart(product) {
   const prodottoPresente = addedProducts.find(p => p.name === product.name)

   if (prodottoPresente) {
    updateProductQuantity(product)
    return
   } 
    setAddedProducts(curr => [...curr, {...product, quantity: 1}])
}


function removeFromCart(product) {
  setAddedProducts(curr =>
    curr.filter(p => p.name !== product.name)
  )
}

  const total = addedProducts.reduce((acc, p) => acc + p.price * p.quantity, 0)


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
            <div key={index} className="products-list">
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
                <div key={index}>
                  <li>{el.name}: {el.price.toFixed(2)}€ - quantity:{el.quantity}</li>
                  <button onClick={() => removeFromCart(el)}>Rimuovi dal carrello</button>
                </div>
              ))}
            </ul>
            <h2>{total.toFixed(2)}€</h2>
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


// 📌 Milestone 3: Modificare il carrello
// Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
// Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
// Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
// Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
// Sotto alla lista del carrello, mostra il totale da pagare:
// Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.
// Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.