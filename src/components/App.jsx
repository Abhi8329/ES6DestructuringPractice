import React from "react";
import cars from "../practice";

function App() {
  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;
  const {
    quality: { back: hondaQualityInBack },
  } = honda;
  const {
    quality: { back: teslaQualityInBack },
  } = tesla;
  function clickMe() {
    alert("Array Destructuring is suceesfull !");
  }
  return (
    <div>
      <button onClick={clickMe}> Array Destructuring Alert </button>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Color</th>
          <th>Quality rate in back</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
          <td>{teslaQualityInBack}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
          <td>{hondaQualityInBack}</td>
        </tr>
      </table>
      ,
    </div>
  );
}

export default App;
