import React, { useState } from "react";
import "./App.css";
import api from "./services/api";

function App() {
  const [flag0, setFlag0] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [turn, setTurn] = useState("-");
  const [message, setMessage] = useState("Ready");
  const [loading, setLoading] = useState(false);

  const runProcess = async (process) => {
    try {
      setLoading(true);

      const response = await api.post("/", {
        process,
      });

      const data = response.data.data;

      setFlag0(data.flag0);
      setFlag1(data.flag1);
      setTurn(data.turn);
      setMessage(data.message);
    } catch (error) {
      setMessage("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <h1>Peterson Solution Simulator</h1>

      <div className="card">

        <h3>Process Status</h3>

        <p>Flag 0 : {flag0 ? "True" : "False"}</p>

        <p>Flag 1 : {flag1 ? "True" : "False"}</p>

        <p>Turn : {turn}</p>

      </div>

      <div className="buttons">

        <button
          onClick={() => runProcess(0)}
        >
          Run Process 0
        </button>

        <button
          onClick={() => runProcess(1)}
        >
          Run Process 1
        </button>

      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>{message}</h2>
      )}

    </div>
  );
}

export default App;