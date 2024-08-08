import React from "react";
import MobileList from "./Components/MobileList";
import data1 from './data1.json'



function App() {
  return (
    <div>
      {data1.map((ele) => {
        return (
          <MobileList 
          image={ele.image} 
          title={ele.title} 
          price={ele.price} />
        );
      })}
    </div>
  );
}

export default App;
