import { Button } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { GameStateContext } from "../../helpers/context";
import "./Result.css";

const Result = ({ name, score }) => {
  const {setGameState,quantity, user, setUser} = useContext(GameStateContext)

  const handleSubmit = () => {
    setGameState('home')
  }

  const handleReport = () => {
    setGameState('report')
  }

  const handleStorage = () => {
    setUser({name:name, score:score, error: (quantity - score) })
  }

  useEffect(() => {
    if (!name) {
      setGameState('home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <div className='buttons'>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleSubmit}
      >
        Go to homepage
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleStorage}
      >
        Get report
      </Button>
      </div>
    </div>
  );
};

export default Result;
