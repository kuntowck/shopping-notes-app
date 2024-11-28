import { useState } from "react"
import "./App.css"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import ShoppingList from "./components/List"

const shoppingItems = [
  {
    id: 1,
    name: "kopi",
    quantity: 1,
    check: true,
  },
  {
    id: 2,
    name: "Gula pasir",
    quantity: 5,
    check: false,
  },
  {
    id: 3,
    name: "Air mineral",
    quantity: 3,
    check: false,
  },
]
function App() {
  const [items, setItems] = useState(shoppingItems)

  const handleAddItems = (newItem) => {
    setItems([...items, newItem])
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ShoppingList items={items} />
      <Footer />
    </div>
  )
}

export default App
