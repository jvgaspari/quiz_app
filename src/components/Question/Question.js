import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { GameStateContext } from "../../helpers/context";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const {setGameState, quantity} = useContext(GameStateContext)
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (quantity <= 50){
      if (currQues > quantity - 2) {
        setGameState('result')
      } else if (selected) {
        setCurrQues(currQues + 1);
        setSelected();
      } else setError("Please select an option first");
    } else {
      if (currQues > 48) {
        setGameState('result')
      } else if (selected) {
        setCurrQues(currQues + 1);
        setSelected();
      } else setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2 dangerouslySetInnerHTML={{__html:questions[currQues].question }}/>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
                dangerouslySetInnerHTML={{__html:i}}
              >
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
