import { Button, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { GameStateContext } from "../../helpers/context";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {

  const {setGameState, quantity, setQuantity} = useContext(GameStateContext)

  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!quantity || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(quantity);
      setGameState('quiz')
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            type='string'
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type='number'
            label="Put number of questions"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;
