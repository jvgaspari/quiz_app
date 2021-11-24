import { Button } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { GameStateContext } from "../../helpers/context";
import "./Result.css";

const Result = ({ name, score }) => {
  const {setGameState,quantity, user, setUser} = useContext(GameStateContext)
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    setGameState('home')
  }

  const handleStorage = () => {
    setUser({name:name, score:score, error: (quantity > 50 ? (50 - score) : (quantity - score) ) })
    setOpen(!false)
  }

  const handleClose = () => {
    setOpen(false)
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

  return open? (
      <div className="result">
        <span className="final">Status report</span>
        <div className='status'>
          <span className='name'><b>Name</b>: {user.name}</span>
          <span className='score'><b>Score</b>: {user.score}</span>
          <span className='error'><b>Error</b>: {user.error}</span>
        </div>
        <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20, width: '200px' }}
            onClick={handleClose}
          >
            Back
          </Button>
      </div>
    )
    : (
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
    )
};

export default Result;
