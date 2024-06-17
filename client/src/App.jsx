import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState("");

  async function sayHello() {
    try {
      const data = await fetch("http://localhost:3310/api/sayhello");
      const res = await data.text();
      setHello(res);
      console.info(hello);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    sayHello();
  }, []);

  return (
    <main className="container">
      <div>{hello}</div>
    </main>
  );
}

export default App;
