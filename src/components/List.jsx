/* eslint-disable react/prop-types */

export default function ShoppingList({ items }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <List item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  )
}

function List({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={item.check ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  )
}
