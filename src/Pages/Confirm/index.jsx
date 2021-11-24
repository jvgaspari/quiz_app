import { Button } from "@material-ui/core";
import { useContext } from "react";
import { GameStateContext } from "../../helpers/context";
import "./styles.css";

export const Confirm = () => {
  const {setGameState} = useContext(GameStateContext)

  const handleSubmit = () => {
    setGameState('home')
  }

  const handleQuiz = () => {
    setGameState('quiz')
  }

  return (
    <div className="result">
      <span className="title">Are you ready ?</span>
      <div className='buttons'>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleSubmit}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleQuiz}
      >
        Start
      </Button>
      </div>
    </div>
  );
};

