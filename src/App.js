import React, { useEffect, useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);
  useEffect(() => {
    setInterval(() => {}, 2000);
  });
  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

export default App;
