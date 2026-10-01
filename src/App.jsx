
function App() {

  const products = [
     { name: 'Mela', price: 0.5 },
     { name: 'Pane', price: 1.2 },
     { name: 'Latte', price: 1.0 },
     { name: 'Pasta', price: 0.7 },
    ];

  return (
    <>
      <h1>Prodotti del mio negozio:</h1>
      <p>
        <ul>
          {products.map((el, index) => (
            <li key={index}>{el.name}: {el.price.toFixed(2)}€</li>
          ))}
        </ul>
      </p>
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