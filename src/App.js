import axios from "axios";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { GameStateContext } from "./helpers/context";
import { Confirm } from "./Pages/Confirm";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [user, setUser] = useState([])
  const [gameState, setGameState] = useState('result')
  const [quantity, setQuantity] = useState();
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (quantity = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${quantity}`
    );

    setQuestions(data.results);
  };

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        quantity,
        setQuantity,
        user,
        setUser,
      }}
    >
      <div className="app">
        <Header />
        {gameState === "home" && <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />}
        {gameState === "confirm" && <Confirm />}
        {gameState === "quiz" && <Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}
        {gameState === "result" && <Result name={name} score={score}/>}
      </div>
    </GameStateContext.Provider>
  );
}

export default App;
