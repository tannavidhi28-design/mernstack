import React from 'react'

export const MapDemo4 = () => {

  var items = [
    { id: 1, name: "Red Apple", colour: "Red" },
    { id: 2, name: "Green Leaf", colour: "Green" },
    { id: 3, name: "Blue Sky", colour: "Blue" },
    { id: 4, name: "Yellow Sun", colour: "Yellow" },
    { id: 5, name: "Purple Flower", colour: "Purple" },
    { id: 6, name: "Black Car", colour: "Black" },
    { id: 7, name: "White Paper", colour: "White" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MapDemo4</h1>

      <table border={1} class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COLOUR</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.colour}</td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  )
}